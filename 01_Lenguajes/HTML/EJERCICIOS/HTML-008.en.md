# HTML-008 — Prepare responsive images and embedded content

- **Topic:** picture, srcset, sizes, figure, and iframe
- **Level:** intermediate
- **Type:** build a page using local resources

## Objective

Prepare a page that uses different images depending on available space and embeds another document with restrictions.

## Prompt

Create a project presentation page. The main image must offer versions for small and large screens. The page must also display a supplementary page inside an iframe.

## Requirements

1. Use figure and figcaption to describe the main image.
2. Use picture to offer a portrait composition when the viewport is 600 pixels wide or less.
3. Inside picture, use img as the default image.
4. Include srcset with at least two image versions and width descriptors.
5. Include sizes to indicate the expected image slot width.
6. Declare width, height, and descriptive alt text.
7. Use loading="lazy" only on an image that is not near the top of the page.
8. Embed local content with iframe.
9. The iframe must have title, dimensions, loading="lazy", and sandbox.
10. Place your own images or permitted images in the imagenes folder.

## Restrictions

- Do not use images without alternative text.
- Do not use iframe to embed unknown or unnecessary pages.
- Do not add sandbox permissions without explaining why they are needed.
- Do not replace a main content image with a CSS background.

## Suggested structure

~~~text
HTML-008/
├── project.html
├── content/
│   └── resources.html
└── images/
    ├── cover-landscape.jpg
    ├── cover-portrait.jpg
    ├── gallery-480.jpg
    └── gallery-960.jpg
~~~

## Review cases

| Check | Expected result |
|---|---|
| Responsive image | picture contains source and img. |
| Resolutions | srcset has candidates with width descriptors. |
| Size | sizes, width, and height are defined. |
| Alternative | img has descriptive alt text. |
| Loading | The secondary image may use lazy loading. |
| Frame | iframe has title, dimensions, and sandbox. |
| Resources | Paths point to existing files. |

## Starter file

Continue from [HTML-008.html](HTML-008.html) and review [contenido/recursos.html](contenido/recursos.html).

## Solution

After attempting the exercise, see [SOLUCIONES/HTML-008.html](../SOLUCIONES/HTML-008.html).

## Sources

- [MDN — Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN — picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)
- [MDN — iframe element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
