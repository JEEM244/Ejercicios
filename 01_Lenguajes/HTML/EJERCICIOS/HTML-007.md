# HTML-007 — Configurar metadatos y recursos externos

- **Tema:** metadatos, enlaces a recursos y carga de scripts
- **Nivel:** básico-intermedio
- **Tipo:** completar y conectar archivos

## Objetivo

Configurar la información principal de una página y enlazar archivos externos de CSS y JavaScript.

## Enunciado

Prepara una página llamada recursos.html para una pequeña biblioteca de apuntes. La página debe describir su contenido en los metadatos y cargar sus recursos desde archivos separados.

## Requisitos

1. Declara el idioma español.
2. Incluye UTF-8, viewport, una descripción y un título.
3. Enlaza un icono SVG desde assets/favicon.svg.
4. Enlaza css/estilos.css como hoja de estilos.
5. Carga js/app.js como script externo utilizando defer.
6. En main, agrega un encabezado y un párrafo con id="estado".
7. El archivo JavaScript debe cambiar el texto de estado por "JavaScript externo cargado correctamente".
8. Incluye noscript con un mensaje alternativo.
9. Comprueba que las rutas relativas funcionen desde la ubicación del documento.

## Restricciones

- No escribas CSS dentro del documento HTML.
- No escribas JavaScript dentro de un atributo onclick.
- No uses async para este ejercicio.
- No agregues datos personales en los metadatos.

## Estructura sugerida

~~~text
HTML-007/
├── recursos.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
└── assets/
    └── favicon.svg
~~~

## Casos de revisión

| Revisión | Resultado esperado |
|---|---|
| Metadatos | Contiene charset, viewport, description y title. |
| Icono | link apunta a favicon.svg. |
| CSS | La hoja externa está enlazada. |
| JavaScript | El script externo usa defer. |
| Resultado | El texto de estado cambia al cargar el script. |
| Respaldo | noscript muestra un mensaje alternativo. |

## Archivo inicial

Continúa desde [HTML-007.html](HTML-007.html) y completa los archivos de css y js.

## Solución

Consulta [SOLUCIONES/HTML-007.html](../SOLUCIONES/HTML-007.html) y los archivos auxiliares después de intentarlo.

## Fuentes

- [MDN — Metadatos del documento](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
- [MDN — Elemento script](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [MDN — Atributos globales](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes)
