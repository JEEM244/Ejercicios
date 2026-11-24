# Solución — JS-018

## Resultado esperado

Cuando uno o más campos no cumplen sus restricciones, el navegador señala los problemas. Cuando todos son válidos, aparece una confirmación local.

## Explicación

1. El formulario tiene el atributo \`novalidate\`, por lo que el navegador no bloquea el evento \`submit\` antes de que se ejecute el listener.
2. \`checkValidity()\` comprueba las restricciones definidas en los controles.
3. Si el resultado es \`false\`, \`reportValidity()\` solicita al navegador que muestre los mensajes de validación.
4. Si todo es válido, \`FormData\` permite recuperar el nombre.
5. La confirmación se muestra con \`textContent\`.

La validación del navegador no sustituye las comprobaciones de un servidor. Este ejemplo no transmite ni almacena datos.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
