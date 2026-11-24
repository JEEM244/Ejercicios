# Solución — JS-016

## Resultado esperado

Cada envío con texto crea un nuevo elemento de lista. Los valores vacíos o compuestos solo por espacios no crean elementos.

## Explicación

1. El listener está registrado en el formulario con el evento `submit`.
2. `preventDefault()` evita que el navegador recargue la página.
3. `trim()` elimina los espacios de los extremos del texto.
4. `createElement("li")` crea un nodo nuevo.
5. `textContent` asigna el texto sin interpretarlo como HTML.
6. `append()` agrega el nodo al final de la lista.

Al terminar, `value` limpia el campo y `focus()` permite escribir la siguiente tarea.

## Archivos

- [index.html](index.html)
- [app.js](app.js)
