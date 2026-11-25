# Solución — JS-019

## Resultado esperado

La página lee dos números y muestra su suma y promedio. Los cálculos están definidos en un módulo independiente.

## Explicación

1. `operaciones.js` exporta dos funciones con nombre.
2. `app.js` las importa usando llaves y una ruta relativa.
3. El formulario escucha `submit` y cancela la navegación.
4. Los valores se convierten con `Number()`.
5. Se comprueban las entradas vacías y los valores no finitos antes de calcular.
6. El resultado se presenta mediante `textContent`.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
- [operaciones.js](modulos/operaciones.js)
