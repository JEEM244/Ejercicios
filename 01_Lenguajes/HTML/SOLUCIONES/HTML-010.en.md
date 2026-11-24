# Solution — HTML-010

This is a reference solution, not the only valid way to complete the project.

## Files

- [index.html](index.html): home page.
- [contacto.html](contacto.html): demonstration form.
- [recursos.html](recursos.html): local iframe document.
- [css/estilos.css](css/estilos.css): minimal styles.
- [js/app.js](js/app.js): non-essential status enhancement.
- [assets/](assets/): original SVG icons and illustrations.

## Design decisions

1. Both pages declare language, encoding, viewport, description, and title.
2. A skip link jumps to the main content.
3. Navigation uses real links.
4. The table presents tabular data and has row and column headers.
5. Images have alternative text and dimensions.
6. picture offers a portrait composition on small screens and srcset offers different resolutions.
7. The iframe loads a local document and keeps sandbox without additional permissions.
8. The form uses fictional data and native validation. It has no backend and does not store requests.
9. details, progress, and meter are used according to their purpose.
10. CSS and JavaScript stay in external files.

## Recommended manual checks

- Open index.html and contacto.html in a browser.
- Resize the window to review picture.
- Navigate with Tab and Shift + Tab.
- Open and close the frequently asked questions.
- Test the form with empty fields and fictional data.
- Check that the iframe displays the local document.
- Run both HTML files through Nu HTML Checker.

**Validation status:** structure reviewed, but it is not claimed that the files passed an automated validator or tests in every browser.
