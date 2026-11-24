# CSS quick reference: layout and motion

See [GUIA_LAYOUT.en.md](GUIA_LAYOUT.en.md) for explanations and full examples.

## Flow and positioning

| Property | Common values |
|---|---|
| display | block, inline, inline-block, flex, grid, none |
| overflow | visible, hidden, clip, scroll, auto |
| position | static, relative, absolute, fixed, sticky |
| top/right/bottom/left | Offsets |
| z-index | Stacking order |

## Flexbox

~~~css
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.item {
    flex: 1 1 14rem;
}
~~~

Container: flex-direction, flex-wrap, justify-content, align-items, align-content, gap.  
Item: flex-grow, flex-shrink, flex-basis, flex, align-self.

## Grid

~~~css
.catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1rem;
}
~~~

Properties: grid-template-columns, grid-template-rows, grid-template-areas, grid-column, grid-row, gap.  
Functions: repeat(), minmax().  
Flexible unit: fr.

## Responsive design

~~~css
.catalog {
    grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
    .catalog {
        grid-template-columns: repeat(2, 1fr);
    }
}

h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
}
~~~

- @media queries the viewport and environment features.
- @container queries a container that declares container-type.
- Prefer content-driven breakpoints.

## Custom properties

~~~css
:root {
    --primary-color: #1d4ed8;
    --space: 1rem;
}

.button {
    background: var(--primary-color);
    padding: var(--space);
}
~~~

## Transitions and motion

~~~css
.button {
    transition: transform 180ms ease;
}

.button:hover {
    transform: translateY(-2px);
}

@keyframes appear {
    from { opacity: 0; }
    to { opacity: 1; }
}
~~~

Respect the reduced-motion preference:

~~~css
@media (prefers-reduced-motion: reduce) {
    .animated {
        animation: none;
        transition: none;
    }
}
~~~

## Official sources

- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout)
- [MDN — Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout)
- [MDN — Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries)
- [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [MDN — Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using)
