# HTML-004 — Crear una tabla de datos accesible

- **Tema:** tablas HTML
- **Nivel:** básico
- **Tipo:** completar y organizar información
- **Requisitos:** conocer elementos, atributos y encabezados HTML

## Objetivo

Representar información tabular con encabezados identificables y una descripción clara.

## Enunciado

Crea una tabla que compare tres lenguajes de programación que te gustaría estudiar. La tabla debe mostrar el nombre, el uso principal y tu nivel actual o plan de estudio.

## Requisitos

1. Utiliza table para crear la tabla.
2. Incluye caption para describir de qué trata.
3. Organiza los encabezados dentro de thead.
4. Organiza los datos dentro de tbody.
5. Utiliza th para encabezados de columna y scope="col".
6. Utiliza th con scope="row" para identificar cada lenguaje.
7. Utiliza td para las celdas que contienen datos.
8. Agrega al menos tres filas de lenguajes.

## Restricciones

- No utilices la tabla para acomodar elementos de diseño.
- No reemplaces los encabezados th por celdas td en la primera fila.
- Los datos deben tener relación clara con el encabezado correspondiente.

## Resultado esperado

Una tabla con nombre, uso y estado de aprendizaje de al menos tres lenguajes. Una persona que consulte la tabla debe poder identificar qué significa cada fila y columna.

## Casos de revisión

| Revisión | Resultado esperado |
|---|---|
| Descripción | La tabla tiene un caption. |
| Encabezados | Las columnas usan th con scope="col". |
| Filas | Cada lenguaje se identifica con th y scope="row". |
| Datos | Las celdas de información usan td. |
| Estructura | Se utilizan thead y tbody. |

## Archivo inicial

Continúa desde [HTML-004.html](HTML-004.html).

## Pistas

<details>
<summary>Mostrar pista 1</summary>

Cada fila se crea con tr. Dentro coloca las celdas de encabezado o de datos.

</details>

<details>
<summary>Mostrar pista 2</summary>

caption va dentro de table y describe el propósito de la tabla.

</details>

## Solución

Consulta [SOLUCIONES/HTML-004.html](../SOLUCIONES/HTML-004.html) después de intentarlo.

## Fuentes

- [MDN — Tablas HTML](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [MDN — Accesibilidad de las tablas](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
