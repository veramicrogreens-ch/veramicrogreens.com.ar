# Vera Microgreens

Sitio estático en HTML y CSS, sin Astro, frameworks ni dependencias de terceros.

## Cloudflare Pages

Configuración de build:
- **Framework preset:** None
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** vacío (raíz del repositorio)
- **Variables de entorno:** ninguna

El script de build solo copia los archivos estáticos a `dist/`; no instala ni compila un framework. Cada commit a la rama `main` dispara un nuevo despliegue si el proyecto está conectado a GitHub.

## Desarrollo

Abrí `index.html` en un navegador. Para publicar cambios, editá los archivos en la raíz y hacé commit en GitHub.

## Archivos principales

- `index.html`: landing principal.
- `images/microgreens-rucula.webp`: foto principal.
- `favicon.png`: favicon VM.
- `404.html`: página de error personalizada.
- `_headers`: encabezados HTTP para Cloudflare Pages.
