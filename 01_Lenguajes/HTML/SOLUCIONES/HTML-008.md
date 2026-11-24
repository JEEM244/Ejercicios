# Solución: HTML-008 — Imágenes adaptables e iframe

**Estado:** revisada a nivel de estructura. No se incluyen fotografías de ejemplo.

## Archivos

- [HTML-008.html](HTML-008.html)
- [recursos.html](contenido/recursos.html)

## Archivos de imagen que debes aportar

Coloca versiones propias o autorizadas dentro de una carpeta imagenes:

- portada-horizontal.jpg
- portada-vertical.jpg
- portada-horizontal-480.jpg
- portada-horizontal-960.jpg
- galeria-480.jpg
- galeria-960.jpg

## Decisiones importantes

- picture permite cambiar la composición en pantallas pequeñas.
- img proporciona la imagen predeterminada y su alternativa textual.
- srcset ofrece varias resoluciones.
- sizes indica el ancho previsto del espacio disponible.
- width y height permiten reservar el espacio de la imagen.
- loading="lazy" se utiliza en una imagen secundaria.
- iframe incrusta un documento local y utiliza title y sandbox.

## Revisión

- [x] picture contiene source e img.
- [x] La imagen tiene alt y dimensiones.
- [x] srcset y sizes están definidos.
- [x] iframe tiene título y sandbox.
- [ ] Colocar imágenes reales y probar en distintos anchos.
- [ ] Comprobar que el documento incrustado se vea correctamente.
