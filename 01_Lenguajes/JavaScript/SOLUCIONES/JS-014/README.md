# Solución — JS-014

## Resultado esperado

El contador inicia en 0. Los botones aumentan, disminuyen o restablecen su valor sin recargar el documento.

## Explicación

- `contador` guarda el estado actual.
- Cada botón registra su propio listener de tipo `click`.
- `actualizarContador()` concentra el cambio visual en un solo lugar.
- `textContent` actualiza el elemento `output`.

La función de actualización evita repetir la misma instrucción en los tres listeners.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
