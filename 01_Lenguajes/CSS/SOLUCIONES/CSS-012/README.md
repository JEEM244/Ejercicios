# Solución — CSS-012

Esta es una solución de referencia. Hay distintas formas correctas de organizar la página si se cumplen los requisitos.

## Archivos
- [index.html](index.html): contenido semántico del portal.
- [css/estilos.css](css/estilos.css): variables, componentes y layouts.
- [assets/marca.svg](assets/marca.svg): icono local.
- [assets/panel-aprendizaje.svg](assets/panel-aprendizaje.svg): ilustración local.

## Decisiones de CSS
1. :root concentra colores, espacios, ancho máximo y radio de borde.
2. Flexbox distribuye la cabecera, navegación, acciones e indicadores.
3. Grid organiza el hero, las tarjetas y la ruta de aprendizaje.
4. La etiqueta usa position: absolute; su tarjeta establece position: relative.
5. clamp escala encabezados de forma fluida.
6. Las media queries reorganizan el contenido cuando el espacio lo requiere.
7. focus-visible conserva una señal clara para teclado.
8. prefers-reduced-motion reduce transiciones y animaciones no esenciales.
9. Los recursos se cargan localmente y no hay dependencias externas.

## Pruebas recomendadas
- Abrir index.html en un navegador.
- Probar a 360 px, 768 px y 1280 px de ancho, además de otros tamaños.
- Navegar con Tab y Shift + Tab.
- Abrir y cerrar cada pregunta frecuente.
- Activar la preferencia de movimiento reducido del sistema.
- Revisar que el contenido no genere desplazamiento horizontal.
- Ejecutar Nu HTML Checker y W3C CSS Validation Service.

**Estado de validación:** rutas y estructura revisadas en el repositorio. No se afirma que el proyecto haya pasado pruebas de navegador ni validadores automáticos.
