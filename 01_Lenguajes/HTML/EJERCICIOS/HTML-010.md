# HTML-010 — Proyecto integrador: biblioteca de aprendizaje

- **Tema:** integración de HTML básico e intermedio
- **Nivel:** intermedio
- **Tipo:** proyecto práctico
- **Requisitos:** HTML-001 a HTML-009

## Objetivo

Construir un pequeño sitio de dos páginas que organice recursos de estudio y combine estructura semántica, imágenes adaptables, tablas, formularios y accesibilidad.

## Enunciado

Crea una biblioteca de aprendizaje para presentar temas de programación, mostrar una ruta de estudio y permitir que una persona complete una solicitud ficticia de asesoría.

El sitio tendrá una página principal, una página de contacto y un documento local que se mostrará dentro de un iframe.

## Requisitos de la página principal

1. Declara el idioma, codificación, viewport, descripción y título del documento.
2. Enlaza un icono, una hoja CSS y un archivo JavaScript externos.
3. Crea un enlace para saltar directamente al contenido principal.
4. Organiza la página con header, nav, main, section y footer.
5. Agrega una imagen principal con picture, source e img.
6. Utiliza srcset y sizes en la imagen principal.
7. Agrega una imagen secundaria con width, height, alt y loading="lazy".
8. Crea una tabla de ruta de estudio con caption, thead, tbody, th, scope y td.
9. Agrega una sección de preguntas frecuentes con al menos tres elementos details y summary.
10. Incluye un progress para representar el avance de ejemplo y un meter para una valoración dentro de un rango.
11. Inserta un iframe que cargue el documento local recursos.html. Incluye title, dimensiones, loading="lazy" y sandbox.
12. Agrega un enlace a la página contacto.html.
13. Utiliza texto de enlace descriptivo y alternativas textuales útiles para las imágenes.

## Requisitos de la página de contacto

1. Reutiliza los metadatos y la navegación principal.
2. Crea un formulario con nombre, correo, área de interés, modalidad y descripción de la consulta.
3. Relaciona todos los controles con label.
4. Utiliza fieldset y legend para agrupar las opciones de modalidad.
5. Define name, id y tipos de entrada adecuados.
6. Utiliza required y límites de longitud donde tengan sentido.
7. Agrega un botón submit.
8. Aclara que el formulario es una demostración estática y no guarda ni envía solicitudes a un servidor.

## Restricciones

- No uses tablas para distribuir visualmente la página.
- No utilices placeholder como sustituto de label.
- No agregues datos personales reales; prueba con información ficticia.
- No elimines los atributos alt de imágenes.
- No agregues permisos a sandbox sin justificar su necesidad.
- No afirmes que el formulario almacena datos.
- Mantén HTML, CSS y JavaScript en archivos separados.

## Estructura sugerida

~~~text
HTML-010/
├── index.html
├── contacto.html
├── recursos.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
└── assets/
    ├── favicon.svg
    ├── portada-horizontal-480.svg
    ├── portada-horizontal-960.svg
    ├── portada-vertical.svg
    └── tarjeta.svg
~~~

## Criterios de aceptación

| Área | Se considera correcta cuando... |
|---|---|
| Metadatos | Ambas páginas tienen idioma, charset, viewport, description y title. |
| Navegación | Los enlaces internos y entre páginas funcionan. |
| Semántica | La estructura utiliza los elementos según su propósito. |
| Imágenes | picture, srcset, sizes, alt, width y height están bien utilizados. |
| Tabla | Los encabezados identifican filas y columnas. |
| Formulario | Los controles tienen etiquetas y validación nativa. |
| Interacción | details funciona y los indicadores tienen valores válidos. |
| Iframe | Carga el documento local y tiene title y sandbox. |
| Recursos | CSS, JavaScript e iconos utilizan rutas correctas. |
| Accesibilidad | Se puede navegar con teclado y entender el contenido sin depender solo de imágenes o color. |

## Archivo inicial

Completa los archivos de la carpeta [HTML-010](HTML-010/).

## Entrega

Al terminar, conserva el proyecto con todos sus recursos locales. Comprueba ambas páginas en un navegador y revisa el marcado con [Nu HTML Checker](https://validator.w3.org/nu/).

## Solución

Consulta [SOLUCIONES/HTML-010](../SOLUCIONES/HTML-010/) después de completar tu versión.

## Autoevaluación

- [ ] Puedo explicar para qué sirve cada elemento semántico utilizado.
- [ ] Puedo explicar cómo funciona picture junto con srcset y sizes.
- [ ] Puedo justificar el uso de th, scope y caption.
- [ ] Puedo explicar cómo se relacionan label, id y name.
- [ ] Sé por qué el formulario no guarda datos por sí solo.
- [ ] Puedo explicar qué limita sandbox en iframe.
- [ ] He probado los enlaces y controles con teclado.
- [ ] He revisado el documento con un validador.

## Fuentes

- [MDN — HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN — Accesibilidad HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- [MDN — Imágenes adaptables](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN — Formularios](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [WHATWG — HTML Living Standard](https://html.spec.whatwg.org/)
