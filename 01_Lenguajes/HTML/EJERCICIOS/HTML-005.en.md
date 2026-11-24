# HTML-005 — Build a registration form

- **Topic:** forms, controls, and basic validation
- **Level:** beginner
- **Type:** build from scratch
- **Requirements:** understand tags, attributes, and semantic structure

## Objective

Create an understandable and usable form by associating each control with its label.

## Prompt

Create a form for a fictional academic support request. It must not connect to a server or store real information.

## Requirements

1. Group controls inside form.
2. Include a name field and an email field.
3. Associate each control with a label using for and id.
4. Use the appropriate input types for text and email.
5. Include a select to choose a study area.
6. Include a radio button group to select experience level.
7. Include a textarea to describe the question.
8. Group the radio buttons inside fieldset and use legend to name the group.
9. Define name on controls whose values would be submitted.
10. Mark essential fields as required.
11. Add a button with type="submit".

## Restrictions

- Do not add passwords or real personal data.
- Do not use placeholder as a replacement for label.
- Do not simulate controls with div elements or text.
- Do not claim that the form saves information: server processing is outside this exercise.

## Expected result

A form with identified fields, selectable options, and basic browser validation. When submitting without required fields, the browser should display its native prompts.

## Review cases

| Check | Expected result |
|---|---|
| Labels | Each input, select, and textarea has an associated label. |
| Identifiers | Each label for value matches the id of its control. |
| Submission | Controls have name and the button is submit. |
| Options | The radio group shares the same name. |
| Validation | Required fields include required. |
| Grouping | Radio buttons are inside fieldset and legend. |

## Starter file

Continue from [HTML-005.html](HTML-005.html).

## Hints

<details>
<summary>Show hint 1</summary>

In label, the for attribute must match the id of the control it describes.

</details>

<details>
<summary>Show hint 2</summary>

For radio buttons to behave as one exclusive choice, they must share the same name and have different value attributes.

</details>

## Solution

After trying the exercise, see [SOLUCIONES/HTML-005.html](../SOLUCIONES/HTML-005.html).

## Note

required and other attributes help browser validation, but a real application must also validate data on the server.

## Sources

- [MDN — HTML forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — Structuring a web form](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
