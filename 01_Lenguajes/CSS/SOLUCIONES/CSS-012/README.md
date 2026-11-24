# Solución de referencia — CSS-012

La solución construye tres páginas conectadas mediante navegación local y utiliza una única hoja de estilos. Grid organiza tarjetas y secciones; Flexbox resuelve grupos que necesitan envolver elementos. Las variables personalizadas centralizan colores, espacios y dimensiones.

## Decisiones importantes

- El diseño empieza con una distribución amplia y cambia a una columna en pantallas estrechas.
- Los breakpoints se basan en el espacio que necesitan las tarjetas y la navegación.
- El enlace para saltar al contenido y los estados focus-visible ayudan a navegar con teclado.
- El formulario es demostrativo: no envía datos ni se conecta a un servidor.
- prefers-reduced-motion reduce transiciones y evita el desplazamiento suave.

## Archivos

- [Inicio](index.html)
- [Temas](temas.html)
- [Contacto](contacto.html)
- [Hoja de estilos](css/estilos.css)

## Revisión

Prueba las tres páginas localmente. Recorre todos los enlaces, usa teclado, cambia el ancho y revisa que la hoja compartida se cargue desde las tres rutas.
