# Solution — JS-013

## Result

When the button is pressed:
- The title changes to "JavaScript is connected!".
- The paragraph confirms that the DOM was updated.
- The button changes to "Updated".

## Explanation

1. \`querySelector()\` finds each element using its CSS selector.
2. \`addEventListener("click", ...)\` registers a function for the click.
3. \`textContent\` changes text without parsing HTML tags.

The \`defer\` attribute lets the browser parse the HTML before running the JavaScript file.

## Files

- [index.html](index.html)
- [app.js](app.js)
