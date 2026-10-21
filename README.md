# A3 TECHNOLOGY E.A.S — Monorepo

Sitio corporativo y API de A3 TECHNOLOGY E.A.S en un solo repositorio: el frontend
(React + Vite) y el backend (NestJS) viven juntos, se versionan juntos y se despliegan
por separado.

## Estructura

```
.
├── back/     API NestJS (puerto 3000)
├── front/    Sitio React + Vite (puerto 5173)
└── package.json   Scripts para manejar ambos desde la raíz
```

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Puesta en marcha

```bash
# 1. Instalar dependencias de los dos proyectos
npm run install:all

# 2. Levantar la API (NestJS, http://localhost:3000)
npm run dev:back

# 3. En otra terminal, levantar el sitio (Vite, http://localhost:5173)
npm run dev:front
```

El backend habilita CORS para `http://localhost:5173` y `http://localhost:3000`.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run install:all` | Instala dependencias de `back` y `front` |
| `npm run dev:back` | API en modo watch |
| `npm run dev:front` | Sitio con HMR |

Dentro de cada carpeta siguen funcionando los scripts propios
(`npm run build`, `npm run test`, `npm run lint`, `npm run test:e2e`).

## Backend

- NestJS 12 con Express, TypeScript y Vitest.
- Módulos: `infrastructure` (datos de infraestructura y servicios) y `alerts`
  (alertas del monitoreo).
- Tests: `cd back && npm test` (unitarios) y `npm run test:e2e` (end-to-end).

## Frontend

- React 19 + Vite + TypeScript, con `react-router-dom`.
- Secciones: landing, servicios, infraestructura (tarjetas y tabla de servidores),
  panel de alertas y testimonios.
- Datos de ejemplo en `front/src/data/`.

## Convenciones

- Ramas: `main` es la rama estable; los cambios entran por ramas cortas
  (`feat/...`, `fix/...`).
- Los mensajes de commit siguen Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
- `node_modules/`, `dist/`, `.env` y los JSON de datos de runtime no se versionan.
