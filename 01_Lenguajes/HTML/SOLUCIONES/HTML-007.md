# Solución: HTML-007 — Metadatos y recursos externos

**Estado:** revisada a nivel de estructura. No se ejecutó un validador automático.

## Archivos

- [HTML-007.html](HTML-007.html)
- [Hoja de estilos](css/estilos.css)
- [JavaScript externo](js/app.js)
- [Icono SVG](assets/favicon.svg)

## Decisiones importantes

- description resume el contenido de la página.
- link rel="icon" enlaza el icono.
- link rel="stylesheet" carga la hoja externa.
- script con defer carga el JavaScript sin detener el análisis inicial del HTML.
- El script actualiza el párrafo identificado por estado.
- noscript muestra una nota cuando JavaScript no está disponible.

## Revisión

- [x] Los metadatos básicos están en head.
- [x] Los recursos están separados por tipo.
- [x] El script externo utiliza defer.
- [ ] Copiar la estructura en una carpeta local y comprobar las rutas.
- [ ] Abrir en el navegador y comprobar el cambio de texto.
