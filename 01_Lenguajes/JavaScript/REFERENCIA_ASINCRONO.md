# Referencia rápida: módulos y asincronía

Consulta la [guía de módulos y programación asíncrona](GUIA_ASINCRONO.md) para explicaciones completas.

## Módulos

Cargar desde HTML:

~~~html
<script type="module" src="app.js"></script>
~~~

Exportación con nombre:

~~~js
export const IVA = 0.16;
export function sumar(a, b) {
    return a + b;
}
~~~

Importación con nombre:

~~~js
import { IVA, sumar } from "./operaciones.js";
~~~

Exportación predeterminada:

~~~js
export default function saludar(nombre) {
    return "Hola " + nombre;
}
~~~

Importación predeterminada:

~~~js
import saludar from "./saludo.js";
~~~

Usa rutas relativas como `./modulo.js`. Prueba módulos mediante un servidor HTTP local.

## JSON

~~~js
const texto = JSON.stringify({ nombre: "Mara" }, null, 2);
const objeto = JSON.parse(texto);
~~~

- `JSON.stringify()`: valor JavaScript → texto JSON.
- `JSON.parse()`: texto JSON → valor JavaScript.

Ambos pueden requerir tratamiento de errores; `JSON.parse()` lanza una excepción si el texto no es válido.

## Promesas

~~~js
tarea
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error.message))
    .finally(() => console.log("Terminó"));
~~~

Estados: pending, fulfilled y rejected.

## async / await

~~~js
async function consultar() {
    try {
        const resultado = await obtenerDatos();
        return resultado;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}
~~~

Una función `async` devuelve una promesa. `await` espera el resultado dentro de una función asíncrona o de un módulo.

## Varias promesas

~~~js
const [usuarios, productos] = await Promise.all([
    cargarUsuarios(),
    cargarProductos()
]);
~~~

`Promise.all()` falla si una de las promesas se rechaza.

## Fetch

~~~js
async function cargarJSON(ruta) {
    const respuesta = await fetch(ruta);

    if (!respuesta.ok) {
        throw new Error("HTTP " + respuesta.status);
    }

    return await respuesta.json();
}
~~~

Revisa `response.ok`: una respuesta HTTP 404 no rechaza automáticamente `fetch()`.

## Fuentes

- [MDN — Módulos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [MDN — Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
- [MDN — Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)

Consulta también la [referencia en inglés](REFERENCIA_ASINCRONO.en.md).
