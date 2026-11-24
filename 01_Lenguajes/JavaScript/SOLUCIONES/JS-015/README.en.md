# Solution — JS-015

## Expected result

The preview changes while typing. The counter displays the current input length and returns to zero when the field is cleared.

## Explanation

1. The field, paragraph, and \`output\` element are selected.
2. The listener handles the \`input\` event, which runs when the value changes.
3. The \`value\` property reads the field content.
4. \`length\` counts the string's code units.
5. \`textContent\` updates the preview without parsing the text as HTML.

The HTML \`maxlength\` attribute limits the input to 60 characters.

## Files

- [index.html](index.html)
- [app.js](app.js)
