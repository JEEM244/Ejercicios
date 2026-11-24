# CSS quick reference

A lookup sheet for common properties and patterns. For explanations, see [GUIA.en.md](GUIA.en.md).

## Syntax

~~~css
selector {
    property: value;
}
~~~

Comment: /* text */

## Selectors

| Pattern | Meaning |
|---|---|
| p | Type selector |
| .class | Class |
| #identifier | ID |
| * | Universal |
| [disabled] | Attribute present |
| [type="email"] | Attribute with value |
| A B | Descendant |
| A > B | Direct child |
| A + B | Immediate sibling |
| A ~ B | Later sibling |
| A:hover | Hover state |
| A:focus-visible | Visible focus |
| A:first-child | First child |
| A::before | Pseudo-element |

## Cascade and specificity

- Matching, origin, importance, and layers are considered first.
- Specificity is compared afterward.
- Scope and source order are considered when earlier steps tie.
- Common form: ID - class/attribute/pseudo-class - type/pseudo-element.
- Avoid using !important to fix poorly organized rules.

## Box model

| Property | Purpose |
|---|---|
| width, height | Size |
| min-width, max-width | Horizontal limits |
| min-height, max-height | Vertical limits |
| padding | Inner spacing |
| border | Border |
| margin | Outer spacing |
| box-sizing | How size is calculated |

Common pattern:

~~~css
*,
*::before,
*::after {
    box-sizing: border-box;
}
~~~

## Units

| Unit | Reference |
|---|---|
| px | CSS pixel |
| % | Reference defined by the property |
| em | Context font size |
| rem | Root font size |
| vw | Viewport width |
| vh | Viewport height |

## Colors and text

~~~css
color: #263238;
background-color: hsl(210 30% 96%);
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.6;
text-align: left;
text-decoration: none;
~~~

Color formats: named colors, hexadecimal, rgb(), and hsl(). Some formats support transparency through alpha.

## Display

- block
- inline
- inline-block
- none

## Horizontally centered container

~~~css
.container {
    width: 90%;
    max-width: 60rem;
    margin-inline: auto;
}
~~~

## Official resources

- [MDN — CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [MDN — Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)
- [MDN — Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade)
- [MDN — Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model)
