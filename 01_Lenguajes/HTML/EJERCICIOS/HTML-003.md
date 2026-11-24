# HTML-003 — Crear una página semántica con navegación

- **Tema:** semántica y enlaces internos
- **Nivel:** básico
- **Tipo:** construir una página desde cero
- **Requisitos:** haber revisado HTML-001 y HTML-002

## Objetivo

Utilizar elementos semánticos para organizar información y crear navegación entre secciones de la misma página.

## Enunciado

Crea una página informativa sobre una tecnología que te interese. Puede ser HTML, CSS, JavaScript, Python o una base de datos.

## Requisitos

1. Agrega un header con el título y una breve presentación.
2. Crea un nav con enlaces a las secciones "Conceptos" y "Recursos".
3. Coloca el contenido principal dentro de main.
4. Crea una section con id="conceptos", un encabezado y una explicación.
5. Dentro de esa sección agrega un article con un subtítulo y un ejemplo breve escrito con tus palabras.
6. Crea una section con id="recursos" y una lista con dos enlaces externos de documentación.
7. Agrega un footer con una nota sobre la práctica.
8. Comprueba que cada enlace interno apunte al id correcto.

## Restricciones

- No agregues CSS ni JavaScript.
- No uses div como reemplazo de todos los elementos semánticos.
- Los enlaces externos deben tener texto que describa su destino.
- No utilices etiquetas solamente por su apariencia.

## Resultado esperado

Al abrir la página en el navegador debe aparecer un artículo con navegación superior. Los enlaces del menú deben desplazar la página a la sección correspondiente.

## Casos de revisión

| Revisión | Resultado esperado |
|---|---|
| Estructura | Existen header, nav, main y footer. |
| Secciones | Existen los IDs conceptos y recursos. |
| Navegación | Cada enlace interno apunta a una sección existente. |
| Artículo | Hay un article con encabezado y explicación. |
| Recursos | Hay dos enlaces externos con texto descriptivo. |
| Semántica | Los elementos representan el propósito de su contenido. |

## Archivo inicial

Continúa desde [HTML-003.html](HTML-003.html).

## Pistas

<details>
<summary>Mostrar pista 1</summary>

Un enlace hacia una sección puede escribirse con el símbolo # seguido del valor de su id.

</details>

<details>
<summary>Mostrar pista 2</summary>

Una sección temática puede utilizar section, y un contenido que se entiende por sí mismo puede organizarse dentro de article.

</details>

## Solución

Consulta [SOLUCIONES/HTML-003.html](../SOLUCIONES/HTML-003.html) después de intentarlo.

## Fuentes

- [MDN — Elementos HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)
