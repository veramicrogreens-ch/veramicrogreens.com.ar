# Vera Microgreens

Sitio web estático en HTML y CSS, sin framework, dependencias ni proceso de compilación.

## Publicación en Cloudflare Workers

El archivo `wrangler.jsonc` indica que los únicos archivos públicos están en `site/`. Así, los archivos de herramientas y configuración no se suben como contenido del sitio.

- No hace falta `package.json` ni instalar dependencias de la web.
- La página principal es `site/index.html`.
- Las imágenes están en `site/images/`.
- El favicon está en `site/favicon.png`.
- Los errores 404 usan `site/404.html`.

Para cambiar el sitio, editá los archivos dentro de `site/` y hacé commit en `main`. Cloudflare desplegará los cambios desde GitHub.
