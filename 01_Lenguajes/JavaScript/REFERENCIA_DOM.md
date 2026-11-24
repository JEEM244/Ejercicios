# Referencia rápida: DOM y eventos

Para explicaciones y ejemplos completos, consulta [GUIA_DOM.md](GUIA_DOM.md).

## Conectar el archivo

~~~html
<script src="app.js" defer></script>
~~~

## Seleccionar elementos

~~~js
const porId = document.getElementById("titulo");
const primero = document.querySelector(".tarjeta");
const varios = document.querySelectorAll("button");
~~~

- \`getElementById("id")\`: elemento o \`null\`.
- \`querySelector("selector")\`: primera coincidencia o \`null\`.
- \`querySelectorAll("selector")\`: lista de coincidencias.

## Leer y modificar

~~~js
elemento.textContent = "Nuevo texto";
campo.value = "Nuevo valor";

elemento.classList.add("activa");
elemento.classList.remove("oculta");
elemento.classList.toggle("seleccionada");

elemento.setAttribute("aria-label", "Cerrar");
elemento.getAttribute("aria-label");
~~~

## Crear y eliminar nodos

~~~js
const item = document.createElement("li");
item.textContent = "Nueva tarea";
lista.append(item);

item.remove();
~~~

Para mostrar texto escrito por una persona, usa \`textContent\`, no lo insertes como HTML mediante \`innerHTML\`.

## Eventos

~~~js
boton.addEventListener("click", (evento) => {
    console.log(evento.type);
    console.log(evento.target);
    console.log(evento.currentTarget);
});
~~~

| Evento | Uso habitual |
|---|---|
| click | Activar un botón |
| input | Responder mientras cambia el texto |
| change | Detectar un cambio confirmado |
| submit | Procesar un formulario |
| keydown | Detectar una tecla |
| focus / blur | Recibir o perder el foco |

## Formulario

~~~js
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);
    const nombre = datos.get("nombre");

    resultado.textContent = "Hola, " + nombre;
});
~~~

El control debe tener atributo \`name\` para aparecer en \`FormData\`.

## Validación nativa

~~~js
if (formulario.checkValidity()) {
    console.log("Formulario válido");
} else {
    formulario.reportValidity();
}
~~~

Atributos HTML frecuentes: \`required\`, \`minlength\`, \`maxlength\`, \`type="email"\`, \`min\` y \`max\`.

## Métodos del evento

- \`evento.preventDefault()\`: cancela la acción predeterminada.
- \`evento.stopPropagation()\`: detiene la propagación a otros elementos.

No son intercambiables.

## Errores rápidos

- \`null\`: el selector no encontró el elemento.
- \`TypeError\` al leer una propiedad: comprueba que el elemento existe.
- El formulario se recarga: revisa el listener de \`submit\` y \`preventDefault()\`.
- El texto se interpreta como etiquetas: usa \`textContent\`.

## Fuentes

- [MDN — DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- [MDN — Eventos](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Events)
- [MDN — addEventListener()](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)

Consulta también la [referencia en inglés](REFERENCIA_DOM.en.md).
