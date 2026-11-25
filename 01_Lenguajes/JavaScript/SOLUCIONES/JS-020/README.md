# Solución — JS-020

## Resultado esperado

La página elimina espacios exteriores del nombre y crea un mensaje de bienvenida. Si el campo está vacío, muestra una indicación y devuelve el foco al campo.

## Explicación

- `limpiarNombre()` se exporta con nombre y se importa entre llaves.
- `crearBienvenida()` es la exportación predeterminada y se importa sin llaves.
- El archivo principal se encarga del formulario y la interfaz.
- El módulo contiene las funciones para tratar el texto y crear el mensaje.
- `textContent` presenta el resultado sin interpretarlo como HTML.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
- [mensajes.js](modulos/mensajes.js)
