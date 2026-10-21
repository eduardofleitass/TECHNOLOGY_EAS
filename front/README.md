# Front — A3 TECHNOLOGY E.A.S

Sitio corporativo en React 19 + Vite + TypeScript.

## Estructura

```
src/
├── App.tsx                 orden de las secciones
├── index.css               hoja de estilos única (tokens arriba)
├── assets/img/             fotos del sitio (jpg optimizado)
├── components/site/
│   ├── Brand.tsx           isotipo + nombre
│   ├── Icons.tsx           set de iconos SVG (line icons)
│   ├── SiteHeader.tsx      navegación, buscador y menú móvil
│   ├── Hero.tsx            portada con tarjeta de beneficios
│   ├── ServicesSection.tsx 5 tarjetas de servicio
│   ├── ProjectsSection.tsx 3 proyectos destacados (fondo oscuro)
│   ├── WhyUsSection.tsx    4 motivos con separadores
│   ├── ClientsSection.tsx  logos de clientes
│   ├── CtaSection.tsx      contacto con tarjeta de vidrio
│   └── SiteFooter.tsx
└── data/site.ts            TODO el texto y las imágenes del sitio
```

## Editar contenido

Todo el texto (títulos, servicios, proyectos, clientes, contacto) está en
`src/data/site.ts`. Las imágenes se importan desde `src/assets/img` y Vite las
versiona con hash en el build.

Los nombres de clientes son de referencia: reemplazarlos por los reales antes
de publicar.

## Scripts

```bash
npm run dev       # desarrollo con HMR en http://localhost:5173
npm run build     # tsc -b + vite build -> dist/
npm run preview   # sirve dist/ (puerto 4173)
npm run lint      # oxlint
```

## Marca

- `public/A3_Technology_logo_transparente.png` es el logo original (tinta oscura
  sobre transparente), pensado para fondos claros.
- `src/assets/brand/logo-lockup-light.png` y `logo-lockup-tagline-light.png` son
  el mismo logo recompuesto en horizontal y en versión clara (tinta blanca, "A3"
  azul): el primero para el header, el segundo con la bajada para el pie.
- El favicon usa el nucleo del emblema (anillo + manos) recortado en circulo y
  montado sobre una placa clara, porque el emblema completo se empasta a 16 px.
  Se publican `favicon.ico` (16/32/48/64), `favicon-32.png` y
  `apple-touch-icon.png` (180, opaco para iOS).
- `scripts/build-brand-assets.py` regenera los cuatro lockups y los iconos desde
  el maestro (requiere Pillow): `python scripts/build-brand-assets.py`.

## Notas de diseño

- Tema claro: fondo blanco, secciones alternadas en gris muy claro (`--paper`) y
  azul corporativo `#0f6fd0` como acento. Todo en variables CSS (`:root`) en
  `src/index.css`; los pares de color estan elegidos para pasar AA (4.5:1) en
  texto chico.
- Tipografías Manrope (títulos) e Inter (texto), cargadas desde Google Fonts con
  fallback al sistema.
- Breakpoints: 1180, 1080 (menú móvil), 960, 700 px.
- La API NestJS vive en `../back` y en desarrollo escucha en `:3000`; su CORS ya
  permite `http://localhost:5173`.
