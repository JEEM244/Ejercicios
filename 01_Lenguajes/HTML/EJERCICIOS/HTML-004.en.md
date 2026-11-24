# HTML-004 — Create an accessible data table

- **Topic:** HTML tables
- **Level:** beginner
- **Type:** complete and organize information
- **Requirements:** understand HTML elements, attributes, and headings

## Objective

Represent tabular information with identifiable headers and a clear description.

## Prompt

Create a table comparing three programming languages you would like to study. The table must show the name, main use, and your current level or study plan.

## Requirements

1. Use table to create the table.
2. Include caption to describe its purpose.
3. Place the headers inside thead.
4. Place the data rows inside tbody.
5. Use th for column headings with scope="col".
6. Use th with scope="row" to identify each language.
7. Use td for data cells.
8. Add at least three language rows.

## Restrictions

- Do not use a table to arrange page layout.
- Do not replace th headers with td cells in the first row.
- Data must clearly relate to its corresponding header.

## Expected result

A table with the name, main use, and study status of at least three languages. Readers should be able to identify what each row and column represents.

## Review cases

| Check | Expected result |
|---|---|
| Description | The table has a caption. |
| Headers | Columns use th with scope="col". |
| Rows | Each language uses th with scope="row". |
| Data | Information cells use td. |
| Structure | thead and tbody are used. |

## Starter file

Continue from [HTML-004.html](HTML-004.html).

## Hints

<details>
<summary>Show hint 1</summary>

Each row uses tr. Place header or data cells inside it.

</details>

<details>
<summary>Show hint 2</summary>

caption belongs inside table and describes the table's purpose.

</details>

## Solution

After trying the exercise, see [SOLUCIONES/HTML-004.html](../SOLUCIONES/HTML-004.html).

## Sources

- [MDN — HTML tables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [MDN — Table accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
