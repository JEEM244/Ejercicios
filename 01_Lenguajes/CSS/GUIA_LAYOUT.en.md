# CSS guide: layout and responsive design

**Level:** beginner-intermediate.  
**Prerequisites:** GUIA.en.md and exercises CSS-001 through CSS-005.

This expansion explains how to arrange elements, adapt an interface to different spaces, and add motion without harming the experience.

## 1. Normal flow

Normal flow is how the browser places elements when their layout behavior has not been changed with CSS.

- Block elements are generally placed one below another.
- Inline elements flow within text.
- Content size can change the space occupied by each box.

Start with semantic HTML that remains readable without styles. Then use CSS to improve its layout. This way the content keeps a logical order even when styles fail to load.

## 2. Overflow

The overflow property controls what happens when content does not fit inside a box.

~~~css
.container {
    overflow: auto;
}
~~~

Common values:
- visible: content may extend outside.
- hidden: clips content outside the box.
- clip: clips without creating a scrolling box.
- scroll: provides scrolling mechanisms.
- auto: allows scrolling when needed.

Do not hide essential text to fix a sizing problem. First check width, long words, and structure.

## 3. Positioning

The position property changes how a box is placed.

| Value | General behavior |
|---|---|
| static | Normal positioning; initial value |
| relative | Stays in flow and can be offset from its normal position |
| absolute | Leaves normal flow and is positioned relative to its containing block |
| fixed | Positioned relative to the viewport in the usual case |
| sticky | Behaves like relative until a scroll threshold is reached |

Example of an element overlaid on a card:

~~~css
.card {
    position: relative;
}

.badge {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
}
~~~

An absolutely positioned element usually uses the nearest suitable ancestor that establishes its containing block. This is why position: relative is often used on the card.

### 3.1 Offsets and layers

The top, right, bottom, and left properties set offsets when the positioning mode supports them.

z-index controls stacking order within the relevant stacking context. A large number does not guarantee that an element appears above everything: some elements create independent stacking contexts.

Avoid positioning everything with position: absolute. It is useful for overlays, not for building the entire page structure.

## 4. Flexbox: one-axis layout

Flexbox is designed to distribute items along one main dimension: a row or a column. It is useful for navigation bars, groups of buttons, and rows of cards.

~~~css
.list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
}
~~~

Container properties:
- display: flex enables Flexbox.
- flex-direction sets row, row-reverse, column, or column-reverse.
- flex-wrap allows items to move to another line.
- justify-content distributes items along the main axis.
- align-items aligns items on the cross axis.
- align-content distributes lines when there is space and multiple lines.
- gap defines spacing between items.

Item properties:
- flex-grow: ability to grow.
- flex-shrink: ability to shrink.
- flex-basis: initial sizing reference.
- flex: shorthand for those properties.
- align-self: changes one item's alignment.

Example of flexible cards:

~~~css
.card {
    flex: 1 1 14rem;
}
~~~

The first value allows growing, the second allows shrinking, and the third sets the flex basis.

## 5. Grid: rows and columns

CSS Grid is designed for two-dimensional layout. You can define rows, columns, and areas.

~~~css
.panels {
    display: grid;
    grid-template-columns: 15rem 1fr;
    grid-template-areas:
        "menu content";
    gap: 1rem;
}

.menu {
    grid-area: menu;
}

.content {
    grid-area: content;
}
~~~

Common properties:
- grid-template-columns and grid-template-rows define tracks.
- gap sets spacing between rows and columns.
- grid-template-areas assigns names to regions.
- grid-column and grid-row control placement and spanning.
- repeat() repeats patterns.
- minmax() defines a minimum and maximum range.
- fr distributes a fraction of available space.

A card pattern that adapts to the available space:

~~~css
.catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1rem;
}
~~~

auto-fit and auto-fill behave differently when empty tracks remain; try both with different amounts of content.

## 6. When should you use Flexbox or Grid?

| Need | Common choice |
|---|---|
| Items in one row or column | Flexbox |
| Align controls in a toolbar | Flexbox |
| Arrange a page in rows and columns | Grid |
| Create header, menu, and content areas | Grid |
| Cards that wrap and grow with content | Flexbox or Grid, depending on the pattern |

They are not competitors. You can combine them: Grid for the overall structure and Flexbox inside each component.

## 7. Responsive design

Responsive design aims to make content work across different viewport sizes and usage conditions.

Principles:
1. Start with a simple layout that works in a narrow viewport.
2. Use flexible dimensions and avoid unnecessary rigid widths.
3. Let the content determine when it needs a different layout.
4. Review text, images, forms, and navigation.
5. Test with keyboard and zoom as well as resizing the viewport.

### 7.1 Media queries

A media query applies rules when an environment condition is met:

~~~css
.catalog {
    display: grid;
    grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
    .catalog {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 70rem) {
    .catalog {
        grid-template-columns: repeat(3, 1fr);
    }
}
~~~

Do not choose a breakpoint only because it matches a phone model. Add a breakpoint when the content no longer lays out well.

You can also query orientation, print, contrast or motion preferences, among other features.

### 7.2 Fluid sizing

clamp() defines a minimum, preferred, and maximum value:

~~~css
h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
}
~~~

min(), max(), and calc() allow combining measurements. Do not let text become too small or too large.

### 7.3 Container queries

Media queries look at the viewport and other environment features. Container queries respond to the size of a specific container.

~~~css
.card-area {
    container-type: inline-size;
}

@container (min-width: 32rem) {
    .card {
        display: grid;
        grid-template-columns: 9rem 1fr;
    }
}
~~~

They are useful for reusable components that can appear in different sized spaces. Learn media queries first; use container queries when the need calls for them.

## 8. Custom properties

Custom properties let you reuse values and change them from one place:

~~~css
:root {
    --primary-color: #1d4ed8;
    --base-space: 1rem;
}

.button {
    background-color: var(--primary-color);
    padding: var(--base-space);
}
~~~

They are declared with two hyphens and read using var(). They usually inherit. You can provide fallback values:

~~~css
color: var(--text-color, #263238);
~~~

Variables help keep colors, spacing, and sizes consistent.

## 9. Transitions and transforms

A transition smooths a change between values when a property changes:

~~~css
.button {
    transition: background-color 180ms ease, transform 180ms ease;
}

.button:hover {
    transform: translateY(-2px);
}
~~~

Not all properties are suitable for animation. Transform and opacity are often efficient choices for visual motion. Avoid animating many expensive properties without a reason.

Transform can visually translate, rotate, scale, or skew an element without changing its place in normal flow.

## 10. Animations with keyframes

Animations describe a sequence of states:

~~~css
@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(0.5rem);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card {
    animation: appear 400ms ease-out both;
}
~~~

Common properties:
- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-direction
- animation-timing-function
- animation-fill-mode

Avoid fast, flashing, or repetitive animations that are distracting.

## 11. Reduced motion

Some people prefer less motion in an interface. Respect this preference with prefers-reduced-motion:

~~~css
@media (prefers-reduced-motion: reduce) {
    .card,
    .button {
        animation: none;
        transition: none;
    }
}
~~~

Do not hide information behind an animation. Content must remain available even when motion is disabled.

## 12. Debugging layouts

When a layout breaks:
1. Check which element is the Flexbox or Grid container.
2. Inspect dimensions and available space.
3. Check flex-direction, flex-wrap, grid-template-columns, and gap.
4. Check whether content has a minimum width that prevents shrinking.
5. Review overflow and positioning.
6. Test with longer content and different viewport widths.
7. Use the Layout panel in browser developer tools.

## 13. Good practices

- Use normal flow whenever it is sufficient.
- Use Flexbox for one-axis distribution and Grid for two-dimensional structures.
- Do not use absolute positioning as a replacement for layout.
- Avoid rigid widths that cause overflow.
- Add breakpoints when content needs them.
- Prefer variables for repeated values.
- Respect prefers-reduced-motion.
- Keep HTML order consistent with reading order.
- Review focus, contrast, and zoom.

## 14. Sources

- [MDN — Introduction to layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction)
- [MDN — Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Containing_block)
- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout)
- [MDN — Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout)
- [MDN — Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries)
- [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [MDN — Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [MDN — Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions/Using)
- [MDN — Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using)
