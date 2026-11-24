# Solution: HTML-008 — Responsive images and iframe

**Status:** reviewed for structure. Sample photographs are not included.

## Files

- [HTML-008.html](HTML-008.html)
- [recursos.html](contenido/recursos.html)

## Image files you need to provide

Place your own or permitted image versions inside an images folder:

- portada-horizontal.jpg
- portada-vertical.jpg
- portada-horizontal-480.jpg
- portada-horizontal-960.jpg
- galeria-480.jpg
- galeria-960.jpg

## Important decisions

- picture allows the composition to change on small screens.
- img provides the default image and its alternative text.
- srcset offers multiple resolutions.
- sizes indicates the expected width of the available slot.
- width and height reserve image space.
- loading="lazy" is used on a secondary image.
- iframe embeds a local document and uses title and sandbox.

## Review

- [x] picture contains source and img.
- [x] The image has alt text and dimensions.
- [x] srcset and sizes are defined.
- [x] iframe has a title and sandbox.
- [ ] Add real images and test at different widths.
- [ ] Check that the embedded document displays correctly.
