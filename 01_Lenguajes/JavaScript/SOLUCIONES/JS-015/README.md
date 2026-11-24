# Solución — JS-015

## Resultado esperado

El texto de la vista previa cambia mientras se escribe. El contador muestra la longitud actual del campo y vuelve a cero cuando se borra.

## Explicación

1. Se seleccionan el campo, el párrafo y el elemento \`output\`.
2. El listener escucha el evento \`input\`, que se activa cuando cambia el valor.
3. La propiedad \`value\` permite leer el contenido del campo.
4. \`length\` cuenta las unidades de código de la cadena.
5. \`textContent\` actualiza la vista previa sin interpretar el texto como HTML.

El atributo \`maxlength\` del HTML limita la entrada a 60 caracteres.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
