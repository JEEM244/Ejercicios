# HTML-008 — Preparar imágenes adaptables y contenido incrustado

- **Tema:** picture, srcset, sizes, figure e iframe
- **Nivel:** intermedio
- **Tipo:** construir una página con recursos locales

## Objetivo

Preparar una página que use diferentes imágenes según el espacio disponible y que incruste otro documento con restricciones.

## Enunciado

Crea una página de presentación de un proyecto. La imagen principal debe ofrecer versiones para pantallas pequeñas y grandes. También debe mostrar una página complementaria dentro de un iframe.

## Requisitos

1. Utiliza figure y figcaption para describir la imagen principal.
2. Utiliza picture para ofrecer una composición vertical cuando el ancho sea de 600 píxeles o menos.
3. Dentro de picture, utiliza img como alternativa predeterminada.
4. Incluye srcset con al menos dos versiones y descriptores de ancho.
5. Incluye sizes para indicar el espacio esperado de la imagen.
6. Declara width, height y un alt descriptivo.
7. Utiliza loading="lazy" solo en una imagen que no esté al inicio de la página.
8. Inserta contenido local con iframe.
9. El iframe debe tener title, dimensiones, loading="lazy" y sandbox.
10. Coloca imágenes propias o con permiso de uso en la carpeta imagenes.

## Restricciones

- No utilices imágenes sin texto alternativo.
- No uses iframe para incrustar páginas que no conozcas o no sean necesarias.
- No agregues permisos a sandbox sin justificar su necesidad.
- No sustituyas una imagen principal por un fondo CSS.

## Estructura sugerida

~~~text
HTML-008/
├── proyecto.html
├── contenido/
│   └── recursos.html
└── imagenes/
    ├── portada-horizontal.jpg
    ├── portada-vertical.jpg
    ├── galeria-480.jpg
    └── galeria-960.jpg
~~~

## Casos de revisión

| Revisión | Resultado esperado |
|---|---|
| Imagen adaptable | picture contiene source e img. |
| Resoluciones | srcset presenta candidatos con descriptores de ancho. |
| Tamaño | sizes, width y height están definidos. |
| Alternativa | img tiene alt descriptivo. |
| Carga | La imagen secundaria puede usar lazy loading. |
| Marco | iframe tiene title, dimensiones y sandbox. |
| Recursos | Las rutas apuntan a archivos existentes. |

## Archivo inicial

Continúa desde [HTML-008.html](HTML-008.html) y revisa [contenido/recursos.html](contenido/recursos.html).

## Solución

Consulta [SOLUCIONES/HTML-008.html](../SOLUCIONES/HTML-008.html) después de intentarlo.

## Fuentes

- [MDN — Imágenes adaptables](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [MDN — Elemento picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)
- [MDN — Elemento iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
