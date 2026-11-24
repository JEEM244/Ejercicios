# Solución — JS-013

## Resultado

Al pulsar el botón:
- El título cambia a "¡JavaScript está conectado!".
- El párrafo confirma que el DOM se actualizó.
- El botón cambia a "Actualizado".

## Explicación

1. \`querySelector()\` encuentra cada elemento mediante su selector CSS.
2. \`addEventListener("click", ...)\` registra una función para el clic.
3. \`textContent\` cambia el texto sin interpretar etiquetas HTML.

El atributo \`defer\` permite que el HTML se analice antes de ejecutar el archivo JavaScript.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
