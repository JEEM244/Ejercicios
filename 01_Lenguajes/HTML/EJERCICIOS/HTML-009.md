# HTML-009 — Crear contenido interactivo nativo

- **Tema:** details, summary, dialog, progress y meter
- **Nivel:** intermedio
- **Tipo:** construir una sección interactiva

## Objetivo

Utilizar elementos HTML nativos para mostrar información desplegable, avisos y valores de estado.

## Enunciado

Crea una sección de preguntas frecuentes para una página de estudio. Incluye un aviso mediante dialog y muestra el avance de una ruta de aprendizaje.

## Requisitos

1. Agrega al menos tres bloques details.
2. Cada details debe tener summary como primer hijo.
3. Escribe una respuesta dentro de cada details.
4. Utiliza open en uno de los bloques para que aparezca desplegado al cargar.
5. Agrega un dialog con open para mostrar un aviso no modal.
6. Dentro del dialog, incluye un form con method="dialog" y un botón para cerrarlo.
7. Agrega progress para mostrar el avance de una tarea.
8. Agrega meter para representar una medida dentro de un rango.
9. Relaciona progress y meter con sus etiquetas usando label.

## Restricciones

- No simules elementos desplegables con div.
- No confundas progress con meter.
- No agregues tabindex al elemento dialog.
- No afirmes que dialog se abre de manera modal solo por utilizar open.

## Resultado esperado

La página muestra preguntas que se pueden expandir, un aviso no modal que se puede cerrar y dos indicadores con significados distintos.

## Casos de revisión

| Revisión | Resultado esperado |
|---|---|
| details | Hay al menos tres bloques. |
| summary | Es el primer hijo de cada details. |
| open | Un bloque aparece expandido al inicio. |
| dialog | El aviso se muestra y se puede cerrar. |
| progress | Representa el avance de una tarea. |
| meter | Representa una medida dentro de un rango. |
| Etiquetas | Los indicadores tienen label asociado. |

## Archivo inicial

Continúa desde [HTML-009.html](HTML-009.html).

## Solución

Consulta [SOLUCIONES/HTML-009.html](../SOLUCIONES/HTML-009.html) después de intentarlo.

## Fuentes

- [MDN — Elemento details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
- [MDN — Elemento summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary)
- [MDN — Elemento dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [MDN — Elemento progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress)
- [MDN — Elemento meter](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter)
