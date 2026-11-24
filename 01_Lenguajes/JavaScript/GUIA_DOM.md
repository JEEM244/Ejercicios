# Guía de JavaScript: DOM y eventos

**Nivel:** básico-intermedio.  
**Prerrequisitos:** [fundamentos](GUIA.md) y [estructuras](GUIA_ESTRUCTURAS.md).  
**Objetivo:** conectar JavaScript con HTML para consultar elementos, actualizar la página y responder a las acciones de una persona.

## 1. ¿Qué es el DOM?

El DOM (*Document Object Model*) es la representación del documento HTML que el navegador organiza como un árbol de nodos. JavaScript puede consultar ese árbol y modificar elementos, texto, atributos y clases.

Ejemplo de HTML:

~~~html
<h1 id="titulo">Mi página</h1>
<p class="estado">Listo</p>
~~~

El navegador crea objetos para esos elementos. JavaScript puede encontrarlos y trabajar con ellos.

**Importante:** el DOM del navegador no está disponible de forma global en Node.js. Un archivo que utiliza `document` debe ejecutarse en una página web o en un entorno que implemente el DOM.

## 2. Conectar JavaScript con HTML

Mantén el código JavaScript en un archivo separado:

~~~html
<script src="app.js" defer></script>
~~~

El atributo `defer` permite que el navegador analice el HTML antes de ejecutar el archivo externo. Así, el script puede encontrar los elementos declarados en el documento.

No mezcles el código JavaScript con atributos HTML como `onclick="..."`. Es más fácil mantener y revisar los eventos cuando se registran desde el archivo JavaScript.

## 3. Seleccionar elementos

### Por ID

~~~js
const titulo = document.getElementById("titulo");
~~~

Devuelve el elemento que tiene ese ID o `null` si no existe.

### Con selectores CSS

~~~js
const primerAviso = document.querySelector(".aviso");
const boton = document.querySelector("#guardar");
~~~

`querySelector()` devuelve la primera coincidencia o `null`.

### Seleccionar varios elementos

~~~js
const botones = document.querySelectorAll("button");

botones.forEach((boton) => {
    console.log(boton.textContent);
});
~~~

`querySelectorAll()` devuelve una lista de nodos que puedes recorrer con `forEach()`. La lista representa las coincidencias en el momento de la consulta; si agregas más elementos después, vuelve a consultarla cuando necesites incluirlos.

### Comprobar que existe un elemento

~~~js
const mensaje = document.querySelector("#mensaje");

if (mensaje !== null) {
    console.log(mensaje.textContent);
}
~~~

Un selector incorrecto o un ID que no existe puede producir `null`. Intentar usar una propiedad de `null` provoca un `TypeError`.

## 4. Leer y modificar contenido

### Texto visible

~~~js
const titulo = document.querySelector("#titulo");

titulo.textContent = "Panel de aprendizaje";
~~~

`textContent` lee o cambia el texto de un elemento. Si asignas una cadena, se muestra como texto.

### Campos de formulario

~~~js
const nombre = document.querySelector("#nombre");

console.log(nombre.value);
nombre.value = "Mara";
~~~

La propiedad `value` contiene el valor actual de controles como `input`, `textarea` y `select`.

### Clases CSS

~~~js
const tarjeta = document.querySelector(".tarjeta");

tarjeta.classList.add("activa");
tarjeta.classList.remove("oculta");
tarjeta.classList.toggle("seleccionada");
~~~

- `add()`: agrega una clase.
- `remove()`: elimina una clase.
- `toggle()`: agrega la clase si no existe o la quita si ya existe.
- `contains()`: comprueba si la clase está presente.

### Atributos

~~~js
const enlace = document.querySelector("a");

enlace.setAttribute("href", "https://developer.mozilla.org/");
console.log(enlace.getAttribute("href"));
~~~

Usa la propiedad específica cuando exista, por ejemplo `input.value`; usa `getAttribute()` y `setAttribute()` para consultar o cambiar atributos HTML.

## 5. Crear y quitar elementos

Para construir contenido a partir de datos, crea nodos y agrega texto como texto:

~~~js
const lista = document.querySelector("#lista");
const elemento = document.createElement("li");

elemento.textContent = "Practicar JavaScript";
lista.append(elemento);
~~~

Para quitar un elemento:

~~~js
elemento.remove();
~~~

Este patrón permite crear listas, mensajes y tarjetas sin escribir HTML dentro de una cadena.

**Evita insertar datos escritos por la persona con `innerHTML`.** Si necesitas mostrar texto recibido de un campo, utiliza `textContent`. Insertar cadenas no confiables como HTML puede crear vulnerabilidades. Para estas prácticas no necesitas `innerHTML`.

## 6. Eventos

Un evento representa algo que ocurre, como un clic, una tecla o el envío de un formulario. Puedes registrar una función para responder a ese evento:

~~~js
const boton = document.querySelector("#saludar");

boton.addEventListener("click", (evento) => {
    console.log("Se hizo clic");
    console.log(evento.type);
});
~~~

`addEventListener()` recibe el nombre del evento y la función que se ejecutará. La función recibe un objeto con información del evento.

### Eventos frecuentes

| Evento | Cuándo ocurre |
|---|---|
| `click` | Al activar un elemento con clic o teclado cuando corresponde |
| `input` | Cuando cambia el valor de un campo mientras se escribe |
| `change` | Cuando un control confirma un cambio de valor |
| `submit` | Cuando se intenta enviar un formulario |
| `keydown` | Cuando se presiona una tecla |
| `focus` | Cuando un control recibe el foco |
| `blur` | Cuando un control pierde el foco |

### El objeto del evento

~~~js
boton.addEventListener("click", (evento) => {
    console.log(evento.target);
    console.log(evento.currentTarget);
});
~~~

- `target`: elemento donde se originó el evento.
- `currentTarget`: elemento que tiene registrado el listener que se está ejecutando.

No son siempre el mismo elemento.

### Cancelar la acción predeterminada

~~~js
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("Se controlará el envío desde JavaScript");
});
~~~

`preventDefault()` cancela la acción predeterminada asociada al evento. No elimina el evento ni detiene por sí mismo su propagación.

`stopPropagation()` tiene otra función: evita que el evento continúe propagándose hacia otros elementos. No lo uses como sustituto de `preventDefault()`.

## 7. Formularios

Escucha el evento `submit` del formulario, no solamente el clic del botón. Así también se cubre el envío realizado desde el teclado.

~~~html
<form id="formulario">
    <label for="nombre">Nombre</label>
    <input id="nombre" name="nombre" required>
    <button type="submit">Enviar</button>
</form>
<p id="resultado" aria-live="polite"></p>
~~~

~~~js
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);
    const nombre = datos.get("nombre");

    resultado.textContent = "Hola, " + nombre;
});
~~~

`FormData` permite leer los controles que tienen un atributo `name`. `preventDefault()` es útil cuando la práctica procesa el formulario localmente y no debe navegar o enviar datos a un servidor.

### Validación HTML

HTML ofrece validación integrada con atributos como:

- `required`: exige un valor.
- `minlength` y `maxlength`: limitan la longitud del texto.
- `type="email"`: comprueba el formato básico de correo.
- `min` y `max`: limitan valores numéricos o fechas según el control.

Desde JavaScript puedes consultar `formulario.checkValidity()` y pedir al navegador que muestre los avisos con `formulario.reportValidity()`.

La validación del navegador ayuda a la experiencia de uso, pero un servidor debe validar otra vez los datos recibidos. El navegador no sustituye la validación del lado del servidor.

## 8. Accesibilidad al trabajar con el DOM

- Usa botones reales para acciones y enlaces reales para navegar.
- Relaciona cada etiqueta `label` con su control mediante `for` e `id`.
- No comuniques un estado solamente mediante color.
- Usa `aria-live` para avisos dinámicos que deban anunciarse a tecnologías de asistencia.
- Conserva el foco del teclado en un lugar lógico.
- No uses un `div` como botón improvisado.

## 9. Errores frecuentes

| Problema | Causa posible | Qué revisar |
|---|---|---|
| `Cannot read properties of null` | El selector no encontró el elemento | ID, clase y momento de ejecución |
| El botón no responde | Listener no registrado o selector incorrecto | Consola y archivo JavaScript conectado |
| El texto no cambia | Se modificó otra propiedad o elemento | `textContent`, selector y valor |
| El formulario recarga la página | No se canceló el envío predeterminado | Listener de `submit` y `preventDefault()` |
| Solo funciona con clic de ratón | Se usó un elemento no interactivo | Botón o control HTML nativo |
| El texto introducido se interpreta como etiquetas | Se insertó como HTML | Mostrarlo con `textContent` |

## 10. Práctica

Resuelve [JS-013 a JS-018](EJERCICIOS/README.md). Cada práctica incluye HTML y JavaScript iniciales. Abre el archivo `index.html` en un navegador para probarla. Node.js por sí solo no ofrece `document` ni los elementos del navegador.

## Fuentes

- [MDN — Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — Document.querySelector()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)
- [MDN — Eventos del DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Events)
- [MDN — EventTarget.addEventListener()](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- [MDN — Evento submit](https://developer.mozilla.org/es/docs/Web/API/HTMLFormElement/submit_event)
- [MDN — Validación de formularios](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms/Form_validation)

Consulta también la [guía en inglés](GUIA_DOM.en.md).
