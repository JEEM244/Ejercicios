# Guía de CSS: distribución y diseño adaptable

**Nivel:** básico-intermedio.  
**Prerrequisitos:** GUIA.md y ejercicios CSS-001 a CSS-005.

Esta ampliación explica cómo distribuir elementos, adaptar una interfaz a distintos espacios y añadir movimiento sin perjudicar la experiencia.

## 1. Flujo normal

El flujo normal es la forma en la que el navegador coloca los elementos cuando no se cambia su comportamiento de distribución.

- Los elementos de bloque suelen colocarse uno debajo de otro.
- Los elementos en línea fluyen dentro del texto.
- El tamaño del contenido puede modificar el espacio que ocupa cada caja.

Comienza con HTML semántico y legible sin estilos. Después usa CSS para mejorar la distribución. Así el contenido conserva un orden lógico incluso cuando los estilos no se cargan.

## 2. Desbordamiento

La propiedad overflow controla qué ocurre cuando el contenido no cabe en la caja.

~~~css
.contenedor {
    overflow: auto;
}
~~~

Valores frecuentes:
- visible: el contenido puede sobresalir.
- hidden: recorta el contenido que queda fuera.
- clip: recorta sin crear un contenedor de desplazamiento.
- scroll: crea mecanismos de desplazamiento.
- auto: permite desplazamiento cuando hace falta.

No ocultes texto esencial para corregir un problema de tamaño. Primero revisa el ancho, las palabras largas y la estructura.

## 3. Posicionamiento

La propiedad position cambia cómo se ubica una caja.

| Valor | Comportamiento general |
|---|---|
| static | Posición normal; valor inicial |
| relative | Permanece en el flujo y puede desplazarse desde su posición |
| absolute | Sale del flujo y se posiciona respecto a su bloque contenedor |
| fixed | Se posiciona respecto al viewport, normalmente permanece al desplazarse |
| sticky | Se comporta como relativo hasta alcanzar un umbral de desplazamiento |

Ejemplo de elemento superpuesto a una tarjeta:

~~~css
.tarjeta {
    position: relative;
}

.etiqueta {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
}
~~~

Un elemento absoluto suele tomar como referencia el ancestro adecuado más cercano que establezca su bloque contenedor. Por eso se suele usar position: relative en la tarjeta.

### 3.1 Desplazamientos y capas

Las propiedades top, right, bottom y left establecen desplazamientos en los casos donde el tipo de posicionamiento los admite.

z-index controla el orden de apilamiento dentro del contexto correspondiente. Un número alto no garantiza estar encima de todo: algunos elementos crean contextos de apilamiento independientes.

Evita colocar todo con position: absolute. Es útil para superponer elementos, no para construir toda la estructura de una página.

## 4. Flexbox: distribución en un eje

Flexbox sirve para distribuir elementos en una dimensión principal: fila o columna. Es útil para barras de navegación, grupos de botones y filas de tarjetas.

~~~css
.lista {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
}
~~~

Propiedades del contenedor:
- display: flex activa Flexbox.
- flex-direction define row, row-reverse, column o column-reverse.
- flex-wrap permite que los elementos pasen a otra línea.
- justify-content distribuye en el eje principal.
- align-items alinea en el eje transversal.
- align-content distribuye las líneas cuando hay espacio y varias filas.
- gap define separación entre elementos.

Propiedades de los elementos:
- flex-grow: capacidad de crecer.
- flex-shrink: capacidad de reducirse.
- flex-basis: tamaño inicial de referencia.
- flex: forma abreviada de esas propiedades.
- align-self: cambia la alineación de un elemento.

Ejemplo de tarjetas flexibles:

~~~css
.tarjeta {
    flex: 1 1 14rem;
}
~~~

El primer valor permite crecer, el segundo reducirse y el tercero establece la base flexible.

## 5. Grid: distribución en filas y columnas

CSS Grid sirve para diseñar una distribución bidimensional. Puedes definir filas, columnas y áreas.

~~~css
.paneles {
    display: grid;
    grid-template-columns: 15rem 1fr;
    grid-template-areas:
        "menu contenido";
    gap: 1rem;
}

.menu {
    grid-area: menu;
}

.contenido {
    grid-area: contenido;
}
~~~

Propiedades frecuentes:
- grid-template-columns y grid-template-rows definen las pistas.
- gap establece separación entre filas y columnas.
- grid-template-areas asigna nombres a regiones.
- grid-column y grid-row controlan la ubicación y expansión.
- repeat() repite patrones.
- minmax() define un rango mínimo y máximo.
- fr distribuye una fracción del espacio disponible.

Patrón de tarjetas que se adapta al espacio:

~~~css
.catalogo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1rem;
}
~~~

auto-fit y auto-fill tienen comportamientos distintos cuando sobran pistas; para empezar, prueba ambos con diferentes cantidades de contenido.

## 6. ¿Cuándo usar Flexbox o Grid?

| Necesidad | Herramienta habitual |
|---|---|
| Elementos en una fila o columna | Flexbox |
| Alinear controles en una barra | Flexbox |
| Distribuir una página en filas y columnas | Grid |
| Crear áreas de encabezado, menú y contenido | Grid |
| Tarjetas que envuelven y crecen según su contenido | Flexbox o Grid, según el patrón |

No son rivales. Se pueden combinar: Grid para la estructura general y Flexbox dentro de cada componente.

## 7. Diseño adaptable

El diseño adaptable busca que el contenido funcione en diferentes tamaños de pantalla y condiciones de uso.

Principios:
1. Comienza por un diseño sencillo que funcione en una ventana estrecha.
2. Utiliza dimensiones flexibles y evita anchos rígidos innecesarios.
3. Deja que el contenido determine cuándo necesita otra distribución.
4. Revisa texto, imágenes, formularios y navegación.
5. Prueba con teclado y zoom, además de cambiar el ancho de ventana.

### 7.1 Media queries

Una media query aplica reglas cuando se cumple una condición del entorno:

~~~css
.catalogo {
    display: grid;
    grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
    .catalogo {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 70rem) {
    .catalogo {
        grid-template-columns: repeat(3, 1fr);
    }
}
~~~

No uses un breakpoint solo porque corresponde a un modelo de teléfono. Añade el punto de cambio cuando el contenido ya no se distribuya bien.

También puedes consultar orientación, impresión, preferencias de contraste o movimiento, entre otras características.

### 7.2 Tamaños fluidos

clamp() permite definir un valor mínimo, preferido y máximo:

~~~css
h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
}
~~~

min(), max() y calc() permiten combinar medidas. Evita que un texto llegue a tamaños demasiado pequeños o grandes.

### 7.3 Consultas de contenedor

Las media queries observan el viewport y otras características del entorno. Las container queries permiten responder al tamaño de un contenedor concreto.

~~~css
.zona-tarjeta {
    container-type: inline-size;
}

@container (min-width: 32rem) {
    .tarjeta {
        display: grid;
        grid-template-columns: 9rem 1fr;
    }
}
~~~

Son útiles para componentes reutilizables que pueden aparecer en espacios de diferentes tamaños. Primero aprende media queries; luego utiliza consultas de contenedor cuando la necesidad lo justifique.

## 8. Variables personalizadas

Las custom properties permiten reutilizar valores y cambiarlos desde un punto central:

~~~css
:root {
    --color-principal: #1d4ed8;
    --espacio-base: 1rem;
}

.boton {
    background-color: var(--color-principal);
    padding: var(--espacio-base);
}
~~~

Se declaran con dos guiones y se leen mediante var(). Suelen heredarse. Puedes establecer valores alternativos:

~~~css
color: var(--color-texto, #263238);
~~~

Las variables ayudan a mantener colores, espacios y tamaños consistentes.

## 9. Transiciones y transformaciones

Una transición suaviza el cambio entre valores cuando una propiedad cambia:

~~~css
.boton {
    transition: background-color 180ms ease, transform 180ms ease;
}

.boton:hover {
    transform: translateY(-2px);
}
~~~

No todas las propiedades son adecuadas para animar. Transform y opacity suelen ser opciones eficientes para movimiento visual. No animes muchas propiedades costosas sin necesidad.

Transform permite trasladar, rotar, escalar o inclinar visualmente un elemento sin cambiar su lugar en el flujo normal.

## 10. Animaciones con keyframes

Las animaciones describen una secuencia de estados:

~~~css
@keyframes aparecer {
    from {
        opacity: 0;
        transform: translateY(0.5rem);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.tarjeta {
    animation: aparecer 400ms ease-out both;
}
~~~

Propiedades frecuentes:
- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-direction
- animation-timing-function
- animation-fill-mode

Evita animaciones rápidas, parpadeantes o repetitivas que distraigan.

## 11. Movimiento reducido

Algunas personas prefieren reducir el movimiento de la interfaz. Respeta esa preferencia con prefers-reduced-motion:

~~~css
@media (prefers-reduced-motion: reduce) {
    .tarjeta,
    .boton {
        animation: none;
        transition: none;
    }
}
~~~

No escondas información detrás de una animación. El contenido debe seguir disponible aunque el movimiento esté desactivado.

## 12. Depuración de layouts

Cuando una distribución falla:
1. Revisa qué elemento es el contenedor Flexbox o Grid.
2. Inspecciona dimensiones y espacio disponible.
3. Comprueba flex-direction, flex-wrap, grid-template-columns y gap.
4. Comprueba si el contenido tiene un ancho mínimo que impide encogerse.
5. Revisa overflow y posicionamiento.
6. Prueba con contenido más largo y varios anchos de ventana.
7. Usa el panel de Layout de las herramientas de desarrollo del navegador.

## 13. Buenas prácticas

- Usa el flujo normal siempre que sea suficiente.
- Usa Flexbox para distribuir en un eje y Grid para estructuras bidimensionales.
- No uses posicionamiento absoluto para reemplazar el layout.
- Evita anchos rígidos que provoquen desbordamiento.
- Usa breakpoints cuando el contenido los necesite.
- Prefiere variables para valores que se repiten.
- Respeta prefers-reduced-motion.
- Mantén el orden del HTML coherente con el orden de lectura.
- Revisa foco, contraste y zoom.

## 14. Fuentes

- [MDN — Introducción al layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction)
- [MDN — Posicionamiento](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Containing_block)
- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout)
- [MDN — Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout)
- [MDN — Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries)
- [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [MDN — Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [MDN — Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions/Using)
- [MDN — Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using)
