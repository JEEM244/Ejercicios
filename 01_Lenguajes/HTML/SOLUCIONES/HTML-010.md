# Solución — HTML-010

Esta es una solución de referencia, no la única forma válida de resolver el proyecto.

## Archivos

- [index.html](index.html): página principal.
- [contacto.html](contacto.html): formulario de demostración.
- [recursos.html](recursos.html): documento local para el iframe.
- [css/estilos.css](css/estilos.css): estilos mínimos.
- [js/app.js](js/app.js): mejora no esencial de estado.
- [assets/](assets/): iconos e ilustraciones SVG originales.

## Decisiones

1. Las páginas declaran idioma, codificación, viewport, description y title.
2. Se utiliza un enlace para saltar al contenido principal.
3. La navegación se construye con enlaces reales.
4. La tabla presenta datos tabulares y tiene encabezados de fila y columna.
5. Las imágenes tienen alternativas textuales y dimensiones.
6. picture ofrece composición vertical en pantallas pequeñas y srcset ofrece resoluciones distintas.
7. El iframe carga un documento local y mantiene sandbox sin permisos adicionales.
8. El formulario usa datos ficticios y validación nativa. No tiene backend y no almacena solicitudes.
9. details, progress y meter se utilizan según su propósito.
10. CSS y JavaScript permanecen en archivos externos.

## Pruebas manuales recomendadas

- Abrir index.html y contacto.html en un navegador.
- Reducir el ancho de la ventana para revisar picture.
- Navegar usando Tab y Shift + Tab.
- Abrir y cerrar las preguntas frecuentes.
- Probar el formulario con campos vacíos y con datos ficticios.
- Verificar que el iframe muestre el documento local.
- Ejecutar ambos archivos HTML en Nu HTML Checker.

**Estado de validación:** estructura revisada, pero no se declara que los archivos hayan pasado un validador automático o pruebas en todos los navegadores.
