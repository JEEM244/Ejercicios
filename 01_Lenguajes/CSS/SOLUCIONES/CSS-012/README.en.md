# Solution — CSS-012

This is a reference solution. Several valid page structures can meet the requirements.

## Files
- [index.html](index.html): semantic portal content.
- [css/estilos.css](css/estilos.css): variables, components, and layouts.
- [assets/marca.svg](assets/marca.svg): local icon.
- [assets/panel-aprendizaje.svg](assets/panel-aprendizaje.svg): local illustration.

## CSS decisions
1. :root centralizes colors, spacing, maximum width, and border radius.
2. Flexbox distributes the header, navigation, actions, and status indicators.
3. Grid organizes the hero, cards, and learning path.
4. The badge uses position: absolute; its card establishes position: relative.
5. clamp scales headings fluidly.
6. Media queries reorganize content when space requires it.
7. focus-visible preserves a clear keyboard indicator.
8. prefers-reduced-motion reduces non-essential transitions and animations.
9. Assets are local and there are no external dependencies.

## Recommended tests
- Open index.html in a browser.
- Test at 360 px, 768 px, and 1280 px wide, along with other sizes.
- Navigate with Tab and Shift + Tab.
- Open and close each FAQ.
- Enable the system reduced-motion preference.
- Check that content does not cause horizontal scrolling.
- Run Nu HTML Checker and W3C CSS Validation Service.

**Validation status:** repository paths and structure have been reviewed. It is not claimed that the project passed browser tests or automated validators.
