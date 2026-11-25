# Solución — JS-021

## Resultado esperado

El programa convierte el objeto en un texto JSON legible, recupera el objeto y muestra sus propiedades. Después intenta analizar un texto incorrecto y captura el error.

## Explicación

- \`JSON.stringify(estudiante, null, 2)\` convierte el objeto a texto con sangría de dos espacios.
- \`JSON.parse(textoJSON)\` recupera un valor de JavaScript.
- El texto de prueba incluye una coma final, que no es válida en JSON.
- \`try...catch\` permite mostrar un mensaje en lugar de terminar por una excepción sin manejar.

## Ejecución

~~~bash
node ejercicio.js
~~~

Archivo: [ejercicio.js](ejercicio.js).
