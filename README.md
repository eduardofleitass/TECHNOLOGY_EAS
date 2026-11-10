# A3 TECHNOLOGY E.A.S

> Sitio corporativo + API de infraestructura TI. Monorepo con **NestJS** en el backend y **React 19 + Vite** en el frontend.

<p align="left">
  <img alt="NestJS" src="https://img.shields.io/badge/NestJS-12-E0234E?logo=nestjs&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white">
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white">
  <img alt="Node" src="https://img.shields.io/badge/Node-%E2%89%A520-339933?logo=node.js&logoColor=white">
</p>

---

## Tabla de contenido

- [Qué es este proyecto](#qué-es-este-proyecto)
- [Stack](#stack)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Requisitos](#requisitos)
- [Puesta en marcha](#puesta-en-marcha)
- [Scripts](#scripts)
- [API — endpoints](#api--endpoints)
- [Frontend — editar el contenido](#frontend--editar-el-contenido)
- [Variables de entorno](#variables-de-entorno)
- [Build y despliegue](#build-y-despliegue)
- [Testing y calidad](#testing-y-calidad)
- [Convenciones de trabajo](#convenciones-de-trabajo)
- [Roadmap](#roadmap)

---

## Qué es este proyecto

Dos aplicaciones que viven en un mismo repositorio, se versionan juntas y se despliegan por separado:

| Parte | Qué hace | Puerto dev |
| --- | --- | --- |
| `front/` | Sitio corporativo de una sola página (landing) con las secciones Inicio, Nosotros, Servicios, Proyectos, Clientes y Contacto. | `5173` |
| `back/` | API REST con datos de infraestructura (servidores, switches, firewalls, storage, DB) y alertas de monitoreo. Trabaja sobre datos mock en memoria. | `3000` |

Hoy el sitio **no consume la API**: es una landing estática servida por Vite. La API está preparada para alimentar un panel de monitoreo / estado de infraestructura a futuro.

---

## Stack

**Backend (`back/`)**

- NestJS 12 sobre Express, ESM (`"type": "module"`, imports con extensión `.js`).
- TypeScript 6, Vitest 4 (+ supertest para e2e), oxlint, Prettier.
- Datos en memoria a partir de `src/infrastructure/mock-data.ts` — sin base de datos.
- CORS habilitado para `http://localhost:5173` y `http://localhost:3000`.

**Frontend (`front/`)**

- React 19 + Vite 8 + TypeScript 6.
- Sin router: una sola página con navegación por anclas (`#servicios`, `#contacto`, …).
- CSS plano en `src/index.css` (tokens de diseño al inicio del archivo), iconos SVG propios.
- Todo el texto editable vive en `src/data/site.ts`.

---

## Estructura del repositorio

```
TECHNOLOGY_EAS/
├── package.json              scripts que orquestan back + front desde la raíz
├── back/                     API NestJS — puerto 3000
│   ├── src/
│   │   ├── main.ts           bootstrap + CORS + puerto (PORT ?? 3000)
│   │   ├── app.module.ts     módulo raíz
│   │   ├── infrastructure/   equipos, tipos, estados, estadísticas y mock data
│   │   └── alerts/           alertas de monitoreo (filtros + resolver)
│   ├── test/                 e2e con supertest
│   └── vitest.config*.ts     configuración de unitarios y e2e
└── front/                    Sitio React + Vite — puerto 5173
    ├── index.html
    ├── public/               favicons y logo público
    ├── scripts/              build-brand-assets.py (genera lockups de marca)
    └── src/
        ├── App.tsx           orden de las secciones
        ├── index.css         hoja de estilos única
        ├── assets/brand/     lockups del logo (dark / light, con tagline)
        ├── assets/img/       fotos del sitio
        ├── components/site/  Header, Hero, Services, Projects, WhyUs, Clients, Cta, Footer, Icons, Brand
        └── data/site.ts      TODO el texto e imágenes del sitio
```

---

## Requisitos

- **Node.js 20 o superior**
- **npm 10 o superior**
- (Opcional, solo para regenerar assets de marca) Python 3 con Pillow

---

## Puesta en marcha

```bash
# 1. Clonar
git clone https://github.com/eduardofleitass/TECHNOLOGY_EAS.git
cd TECHNOLOGY_EAS

# 2. Instalar dependencias de back y front
npm run install:all

# 3. API en modo watch → http://localhost:3000
npm run dev:back

# 4. En otra terminal, el sitio con HMR → http://localhost:5173
npm run dev:front
```

Verificación rápida de la API:

```bash
curl http://localhost:3000/                 # Hello World!
curl http://localhost:3000/infrastructure   # listado de equipos
curl http://localhost:3000/infrastructure/stats
curl http://localhost:3000/alerts?resolved=false
```

---

## Scripts

Desde la raíz del repo:

| Comando | Qué hace |
| --- | --- |
| `npm run install:all` | Instala dependencias de `back` y `front` |
| `npm run dev:back` | API NestJS en modo watch |
| `npm run dev:front` | Sitio Vite con HMR |
| `npm run build` | Compila backend y frontend |
| `npm run lint` | oxlint en ambos proyectos |
| `npm test` | Unitarios + e2e del backend |

Dentro de cada carpeta siguen funcionando los scripts propios:

| `back/` | `front/` |
| --- | --- |
| `npm run start:dev` / `start:prod` | `npm run dev` |
| `npm run build` | `npm run build` (`tsc -b && vite build`) |
| `npm test` / `test:e2e` / `test:cov` | `npm run preview` |
| `npm run lint` / `format` | `npm run lint` |
| `npm run deploy` (`@nestjs/mau`) | — |

---

## API — endpoints

Base: `http://localhost:3000`

### Infraestructura

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/infrastructure` | Lista todos los equipos. Acepta `?type=` o `?status=` |
| `GET` | `/infrastructure/stats` | Totales por estado + `onlinePercentage` |
| `GET` | `/infrastructure/:id` | Un equipo por id (ej. `srv-001`) |

Valores válidos:

- `type`: `server` · `switch` · `firewall` · `loadbalancer` · `storage` · `database` · `ops`
- `status`: `online` · `warning` · `offline` · `maintenance`

```bash
curl "http://localhost:3000/infrastructure?type=server"
curl "http://localhost:3000/infrastructure?status=warning"
```

### Alertas

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/alerts` | Todas las alertas. Filtros: `?severity=` · `?resolved=false` · `?source=` |
| `GET` | `/alerts/:id` | Una alerta por id |
| `PATCH` | `/alerts/:id/resolve` | Marca la alerta como resuelta (`resolved: true`) |

Valores válidos: `severity` → `high` · `medium` · `low`.

```bash
curl "http://localhost:3000/alerts?severity=high"
curl -X PATCH http://localhost:3000/alerts/alt-001/resolve
```

> ⚠️ Los datos son **mock en memoria** (`back/src/infrastructure/mock-data.ts`). El `PATCH` de resolución se pierde al reiniciar el proceso. No hay persistencia ni autenticación todavía.

---

## Frontend — editar el contenido

Todo el texto (nav, hero, servicios, proyectos, motivos, clientes, contacto y footer) está en:

```
front/src/data/site.ts
```

- Las imágenes se importan desde `front/src/assets/img/` y Vite les agrega hash en el build.
- Los iconos son un set SVG propio en `front/src/components/site/Icons.tsx`.
- Para agregar una sección: crear el componente en `components/site/`, agregar los datos en `site.ts` y montarlo en `App.tsx`.
- Lockups del logo: `front/scripts/build-brand-assets.py` los regenera a partir del logo base.

---

## Variables de entorno

El backend solo lee una variable:

| Variable | Default | Uso |
| --- | --- | --- |
| `PORT` | `3000` | Puerto de la API |

El frontend no usa variables de entorno por ahora. Ni `.env` ni los JSON de datos de runtime se versionan.

---

## Build y despliegue

```bash
npm run build
# back/dist   → artefacto NestJS (node dist/main)
# front/dist  → estáticos para cualquier hosting (Nginx, Netlify, Vercel, S3…)
```

**Backend en producción**

```bash
cd back
npm run build
PORT=3000 node dist/main
```

Opcionalmente con `@nestjs/mau` (`npm run deploy` dentro de `back/`) para desplegar en AWS.

**Frontend:** servir `front/dist` como sitio estático. Es una landing sin router, así que no requiere reglas de rewrite salvo el `index.html` raíz.

**Checklist antes de publicar**

1. `npm run build` sin errores.
2. `npm run lint` limpio.
3. `npm test` en verde.
4. Revisar que el correo/teléfono del bloque de contacto en `site.ts` sea el vigente.
5. Reemplazar las fotos de stock de `assets/img/` por material propio cuando esté disponible.

---

## Testing y calidad

```bash
npm test                  # desde la raíz: unitarios + e2e del back
cd back && npm test       # unitarios (Vitest)
cd back && npm run test:e2e
cd back && npm run test:cov
```

- Unitarios y e2e con **Vitest**; e2e usa `supertest` contra `AppModule`.
- Lint con **oxlint** en ambos proyectos; formato del back con **Prettier** (`npm run format`).

---

## Convenciones de trabajo

- `main` es la rama estable. Los cambios entran por ramas cortas: `feat/...`, `fix/...`, `chore/...`, `docs/...`.
- Commits en **Conventional Commits**: `feat:`, `fix:`, `chore:`, `docs:`.
- No se versionan: `node_modules/`, `dist/`, `.env`, JSON de datos de runtime.
- El backend es ESM estricto: los imports relativos llevan extensión `.js`.

---

## Roadmap

- [ ] Conectar el sitio a la API (estado de infraestructura en vivo en la landing).
- [ ] Persistencia real de equipos y alertas (base de datos + migraciones).
- [ ] Autenticación para los endpoints de escritura.
- [ ] Panel de monitoreo (dashboard) sobre los endpoints de `/infrastructure` y `/alerts`.
- [ ] Reemplazo de fotos de stock por material fotográfico propio.

---

<p align="center"><sub>A3 TECHNOLOGY E.A.S — Infraestructura TI. Documentación mantenida por el equipo de Sistemas.</sub></p>
