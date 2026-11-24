# Solución — JS-017

## Resultado esperado

Al enviar el formulario, aparece un resumen con el nombre, el grupo y el turno elegidos. La página no navega a otra dirección ni envía datos a un servidor.

## Explicación

- El listener se registra en el formulario mediante `submit`.
- `preventDefault()` cancela el envío normal del navegador.
- `new FormData(formulario)` recopila los controles que tienen atributo `name`.
- `datos.get("nombre")` recupera el valor correspondiente.
- `textContent` presenta el resumen como texto. El estilo `white-space: pre-line` conserva los saltos de línea.

Para probar el uso seguro de texto, escribe una cadena como `<strong>Hola</strong>`. Debe aparecer literalmente, sin crear un elemento HTML.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
