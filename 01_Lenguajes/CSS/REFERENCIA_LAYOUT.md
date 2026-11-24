# Referencia rápida de CSS: layout y movimiento

Consulta [GUIA_LAYOUT.md](GUIA_LAYOUT.md) para explicaciones y ejemplos completos.

## Flujo y posicionamiento

| Propiedad | Valores frecuentes |
|---|---|
| display | block, inline, inline-block, flex, grid, none |
| overflow | visible, hidden, clip, scroll, auto |
| position | static, relative, absolute, fixed, sticky |
| top/right/bottom/left | Desplazamientos |
| z-index | Orden de apilamiento |

## Flexbox

~~~css
.contenedor {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.elemento {
    flex: 1 1 14rem;
}
~~~

Contenedor: flex-direction, flex-wrap, justify-content, align-items, align-content, gap.  
Elemento: flex-grow, flex-shrink, flex-basis, flex, align-self.

## Grid

~~~css
.catalogo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1rem;
}
~~~

Propiedades: grid-template-columns, grid-template-rows, grid-template-areas, grid-column, grid-row, gap.  
Funciones: repeat(), minmax().  
Unidad flexible: fr.

## Diseño adaptable

~~~css
.catalogo {
    grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
    .catalogo {
        grid-template-columns: repeat(2, 1fr);
    }
}

h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
}
~~~

- @media consulta el viewport y características del entorno.
- @container consulta un contenedor que haya declarado container-type.
- Prefiere breakpoints basados en el contenido.

## Variables personalizadas

~~~css
:root {
    --color-principal: #1d4ed8;
    --espacio: 1rem;
}

.boton {
    background: var(--color-principal);
    padding: var(--espacio);
}
~~~

## Transiciones y movimiento

~~~css
.boton {
    transition: transform 180ms ease;
}

.boton:hover {
    transform: translateY(-2px);
}

@keyframes aparecer {
    from { opacity: 0; }
    to { opacity: 1; }
}
~~~

Respeta la preferencia de movimiento reducido:

~~~css
@media (prefers-reduced-motion: reduce) {
    .animado {
        animation: none;
        transition: none;
    }
}
~~~

## Fuentes oficiales

- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout)
- [MDN — Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout)
- [MDN — Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries)
- [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [MDN — Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using)
