# Reference solution — CSS-012

The solution builds three connected pages with local navigation and one shared stylesheet. Grid organizes cards and sections; Flexbox handles groups that need to wrap. Custom properties centralize colors, spacing, and dimensions.

## Important decisions

- The layout adapts to a single column on narrow viewports.
- Breakpoints are based on the space cards and navigation need.
- The skip link and focus-visible states support keyboard navigation.
- The form is a demonstration: it does not send data or connect to a server.
- prefers-reduced-motion reduces transitions and disables smooth scrolling.

## Files

- [Home](index.html)
- [Topics](temas.html)
- [Contact](contacto.html)
- [Stylesheet](css/estilos.css)

## Review

Test all three pages locally. Follow every link, use the keyboard, resize the viewport, and verify that the shared stylesheet loads from all pages.
