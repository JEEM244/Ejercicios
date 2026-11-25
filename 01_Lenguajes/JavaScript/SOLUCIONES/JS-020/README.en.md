# Solution — JS-020

## Expected result

The page trims surrounding whitespace from the name and creates a welcome message. If the field is empty, it displays a notice and returns focus to the field.

## Explanation

- `limpiarNombre()` is a named export and is imported with braces.
- `crearBienvenida()` is the default export and is imported without braces.
- The main file handles the form and interface.
- The module contains the functions that process the text and create the message.
- `textContent` displays the result without parsing it as HTML.

## Files

- [index.html](index.html)
- [app.js](app.js)
- [mensajes.js](modulos/mensajes.js)
