# Solution — JS-014

## Expected result

The counter starts at 0. The buttons increase, decrease, or reset its value without reloading the document.

## Explanation

- \`contador\` stores the current state.
- Each button registers its own \`click\` listener.
- \`actualizarContador()\` keeps the visual update in one place.
- \`textContent\` updates the \`output\` element.

The update function avoids repeating the same instruction in all three listeners.

## Files

- [index.html](index.html)
- [app.js](app.js)
