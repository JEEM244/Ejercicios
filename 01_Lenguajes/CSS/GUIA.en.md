# CSS guide

**Unit level:** fundamentals.  
**Recommended prerequisites:** basic knowledge of HTML structure.  
**Goal:** learn to describe a page's presentation without mixing styles with content.

## 1. What is CSS?

CSS stands for *Cascading Style Sheets*. It is a style sheet language that describes how a document, such as an HTML page, is presented.

HTML provides structure and meaning. CSS controls aspects such as color, typography, spacing, sizing, and layout.

CSS does not replace HTML. They work together.

## 2. Basic syntax

A CSS rule has a selector and a declaration block:

~~~css
p {
    color: navy;
    font-size: 1rem;
}
~~~

- **Selector:** identifies the elements that the rule targets (p).
- **Property:** identifies what is changed (color).
- **Value:** specifies the desired result (navy).
- **Declaration:** a property and value pair ending with a semicolon.

Braces contain the declarations. Comments use /* comment */.

## 3. Connecting CSS to HTML

For a regular page, an external file is the recommended approach:

~~~html
<head>
    <link rel="stylesheet" href="css/styles.css">
</head>
~~~

The path must match the actual file location.

CSS can also be placed in a style element or an element's style attribute. Those options can be useful for quick tests, but scattering styles across elements makes maintenance harder. CodeVault uses external stylesheets as its default.

## 4. Selectors

Selectors choose the elements that receive a set of rules.

| Type | Example | Selects |
|---|---|---|
| Type | p | All paragraphs |
| Class | .notice | Elements with class="notice" |
| ID | #main | The element with id="main" |
| Universal | * | All elements |
| Attribute | input[type="email"] | Email inputs |
| Group | h1, h2 | h1 and h2 headings |

Classes can be reused. An element can have several classes. An ID should identify one element uniquely within a document.

### 4.1 Combinators

Combinators relate selectors:

~~~css
article p { }       /* any p inside article */
article > p { }     /* p that is a direct child of article */
h2 + p { }          /* first p immediately after h2 */
h2 ~ p { }          /* later p siblings that share the same parent */
~~~

A space means descendant; > means direct child; + selects the immediately following sibling; ~ selects later siblings.

### 4.2 Pseudo-classes and pseudo-elements

A pseudo-class selects a state or condition:

~~~css
a:hover { }
a:focus-visible { }
li:first-child { }
input:checked { }
~~~

Do not rely only on :hover: keyboard users also need a visible state, such as :focus-visible.

A pseudo-element represents part of an element:

~~~css
p::first-letter { }
.card::before { }
~~~

Do not use generated ::before or ::after content for essential information a person needs to understand.

## 5. The cascade

The cascade decides which declaration applies when multiple rules try to change the same property.

In a basic case involving normal author styles, check:

1. Does the rule match the element?
2. Which rule has greater specificity?
3. If specificity is equal, which one appears later?

The complete cascade also considers origin, importance, layers, and scopes. Source order is not the only rule.

Example:

~~~css
p { color: black; }
.notice { color: darkred; }
~~~

A paragraph with class="notice" is dark red because a class selector has greater specificity than a type selector.

## 6. Specificity

Specificity compares selector weights when the cascade reaches that step. For common selectors, represent it with three columns:

| Selector | ID | Class, attribute, or pseudo-class | Type or pseudo-element |
|---|---:|---:|---:|
| p | 0 | 0 | 1 |
| .notice | 0 | 1 | 0 |
| #main | 1 | 0 | 0 |
| main .notice p | 0 | 1 | 2 |

Compare from left to right: IDs first, then classes, then types. Do not add the columns as though they were a decimal number.

At the beginning, avoid overly long selectors and do not use !important as a shortcut for fixing conflicts. Understand which rule is winning instead.

## 7. Inheritance

Some properties, such as color and font-family, are usually inherited from a parent element. Others, such as margin, padding, and border, are not normally inherited.

~~~css
body {
    color: #263238;
    font-family: Arial, sans-serif;
}
~~~

Descendant text can receive the body's color and font family unless another applicable rule says otherwise.

## 8. The box model

The browser represents each element as a box. From the inside out:

1. **Content:** the content.
2. **Padding:** inner space between the content and border.
3. **Border:** the border.
4. **Margin:** outer space around the box.

~~~css
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #334155;
    margin: 16px;
}
~~~

With the initial value content-box, the 300px width refers to the content. Padding and border are added outside it.

A widely used configuration is:

~~~css
*,
*::before,
*::after {
    box-sizing: border-box;
}
~~~

With border-box, the declared width includes content, padding, and border. Margin remains outside.

## 9. Sizes and units

| Unit | Common use |
|---|---|
| px | Fixed CSS pixel dimensions |
| % | Relative size based on the relevant reference |
| em | Relative to the font size of the context |
| rem | Relative to the root element's font size |
| vw | Percentage of viewport width |
| vh | Percentage of viewport height |

Do not convert everything to pixels. rem is useful for text sizes and spacing that should scale with user settings. The exact reference for percentages depends on the property.

You can also limit dimensions:

~~~css
.container {
    width: 90%;
    max-width: 60rem;
    margin-inline: auto;
}
~~~

## 10. Colors

CSS supports named, hexadecimal, RGB, and HSL colors:

~~~css
h1 { color: navy; }
p { color: #263238; }
button { background-color: rgb(30 64 175); }
section { background-color: hsl(210 30% 96%); }
~~~

Some formats support an alpha channel for transparency. Choose combinations with sufficient text/background contrast. Do not communicate an error, state, or category using color alone: add text, an icon, or a shape.

## 11. Typography

Common properties:

~~~css
body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
}

h1 {
    font-size: 2rem;
    font-weight: 700;
}
~~~

- font-family: font family and fallbacks.
- font-size: text size.
- font-weight: weight.
- line-height: line height.
- text-align: alignment.
- text-decoration: decoration, such as an underline.

Include fallback fonts and avoid long text blocks with very tight line height.

## 12. Display: first look

The display property defines how an element participates in layout.

- block: normally starts on a new line and takes the available width.
- inline: flows within a line; width and height do not work like a block box.
- inline-block: flows inline but accepts box dimensions.
- none: the element generates no box and is not shown in the layout.

Flexbox and Grid are complete layout models; they will be covered in the next expansion of this unit.

## 13. Debugging

When a style does not work:

1. Check that the CSS file is linked.
2. Check that the path and file name match.
3. Check that the selector actually matches the element.
4. Look for typing errors, braces, and semicolons.
5. Use browser developer tools to inspect rules and computed values.
6. Check whether another declaration is winning in the cascade.

## 14. Good practices

- Keep HTML and CSS in separate files.
- Use clear and consistent class names.
- Prefer reusable classes over styling through IDs.
- Avoid unnecessarily specific selectors.
- Group related rules and add comments when they provide context.
- Keep visible focus indicators for keyboard navigation.
- Check the page at different viewport widths.
- Do not add !important without understanding the conflict.
- Test changes with realistic content, not only sample text.

## 15. Sources

- [MDN — Learn CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
- [MDN — CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)
- [MDN — Cascading and inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade)
- [MDN — Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)
- [MDN — Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model)
- [MDN — Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors)
- [MDN — Styling text](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling)
- [W3C — CSS](https://www.w3.org/Style/CSS/)
