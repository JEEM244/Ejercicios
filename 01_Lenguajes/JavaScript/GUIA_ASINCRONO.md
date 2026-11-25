# Guía de JavaScript: módulos y programación asíncrona

**Nivel:** intermedio inicial.  
**Prerrequisitos:** fundamentos, funciones, objetos, arreglos y DOM.  
**Objetivo:** dividir el código en módulos, intercambiar datos JSON y trabajar con operaciones que terminan después de iniciar.

## 1. ¿Por qué separar el código?

Cuando un programa crece, mantener todo en un único archivo se vuelve difícil. Podemos separar responsabilidades:

- Un archivo calcula o transforma datos.
- Otro administra la interfaz.
- Otro se encarga de consultar información.

Los módulos permiten reutilizar funciones y mantener cada archivo enfocado en una tarea.

## 2. Exportar e importar

Un módulo puede compartir funciones, variables o clases mediante `export`. Otro archivo puede reutilizarlas con `import`.

### Exportaciones con nombre

Archivo `operaciones.js`:

~~~js
export function sumar(a, b) {
    return a + b;
}

export const IVA = 0.16;
~~~

Archivo `app.js`:

~~~js
import { sumar, IVA } from "./operaciones.js";

console.log(sumar(100, 50));
console.log(IVA);
~~~

El nombre importado debe coincidir con el nombre exportado. Las llaves identifican las exportaciones con nombre.

### Exportación predeterminada

Un módulo puede tener una exportación predeterminada:

~~~js
// saludo.js
export default function saludar(nombre) {
    return "Hola, " + nombre;
}
~~~

Se importa sin llaves:

~~~js
import saludar from "./saludo.js";

console.log(saludar("Mara"));
~~~

Un mismo módulo puede combinar exportaciones con nombre y una predeterminada, pero solo puede tener una exportación predeterminada.

### Importar desde HTML

Para cargar un archivo como módulo en el navegador:

~~~html
<script type="module" src="app.js"></script>
~~~

Los módulos se ejecutan en su propio ámbito y usan modo estricto automáticamente. Las declaraciones `import` y `export` se escriben en el nivel superior de un módulo. El navegador carga módulos como scripts diferidos, por lo que normalmente no hace falta agregar `defer`.

### Rutas de módulos

Usa rutas relativas que empiecen por `./` o `../`:

~~~js
import { sumar } from "./modulos/operaciones.js";
~~~

La ruta se resuelve a partir del archivo que contiene el `import`, no a partir del archivo HTML que abrió la página.

**Importante:** prueba los módulos mediante un servidor HTTP local. Abrir directamente el HTML con `file://` puede impedir que el navegador cargue módulos por sus reglas de origen.

## 3. JSON: intercambiar datos

JSON (*JavaScript Object Notation*) es un formato de texto usado para intercambiar datos. Se parece a los objetos de JavaScript, pero tiene reglas propias.

Ejemplo:

~~~json
{
    "nombre": "Mara",
    "grupo": "5L1",
    "activo": true,
    "materias": ["Programación", "Bases de datos"]
}
~~~

### Convertir un objeto a texto

~~~js
const alumno = {
    nombre: "Mara",
    grupo: "5L1"
};

const texto = JSON.stringify(alumno);
console.log(texto);
~~~

`JSON.stringify()` convierte un valor compatible con JSON en texto. Puede recibir opciones para aplicar sangría:

~~~js
const textoBonito = JSON.stringify(alumno, null, 2);
~~~

### Convertir texto a objeto

~~~js
const texto = '{"nombre":"Mara","grupo":"5L1"}';
const alumno = JSON.parse(texto);

console.log(alumno.nombre);
~~~

`JSON.parse()` convierte texto JSON válido a un valor de JavaScript. Si el texto está mal formado, lanza un error; por eso conviene usar `try...catch` cuando el contenido no está bajo nuestro control:

~~~js
try {
    const datos = JSON.parse(textoRecibido);
    console.log(datos);
} catch (error) {
    console.error("El texto no contiene JSON válido.");
}
~~~

JSON admite objetos, arreglos, cadenas, números, booleanos y `null`. No admite funciones ni comentarios. No confundas un objeto JavaScript con una cadena JSON: son tipos diferentes.

## 4. Código síncrono y asíncrono

El código síncrono avanza instrucción por instrucción. Una operación asíncrona puede iniciar un trabajo y permitir que el resto del programa continúe mientras espera su resultado.

Ejemplos de operaciones asíncronas:

- Leer información de un servidor.
- Esperar un temporizador.
- Consultar archivos desde una aplicación web.
- Esperar una respuesta de una API.

No significa que JavaScript ejecute todo al mismo tiempo. Significa que el resultado se atiende cuando la operación termina.

## 5. Promesas

Una promesa (*Promise*) representa el resultado futuro de una operación asíncrona. Tiene tres estados:

- **pending:** todavía no termina.
- **fulfilled:** terminó correctamente.
- **rejected:** terminó con un error.

### Crear una promesa

~~~js
const tarea = new Promise((resolve, reject) => {
    const correcto = true;

    if (correcto) {
        resolve("La tarea terminó");
    } else {
        reject(new Error("La tarea falló"));
    }
});
~~~

`resolve()` cumple la promesa y `reject()` la rechaza. Una promesa solo puede establecer su resultado una vez.

### Consumir una promesa

~~~js
tarea
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("La operación terminó");
    });
~~~

- `then()`: procesa el resultado correcto.
- `catch()`: maneja un rechazo o error de la cadena.
- `finally()`: se ejecuta al terminar, tanto si se cumple como si se rechaza.

Cada `then()` devuelve una nueva promesa. Si una función dentro de `then()` devuelve otra promesa, la cadena espera su resultado.

No dejes errores sin manejar. Un `catch()` demasiado temprano puede ocultar el error y permitir que el programa continúe con un valor que no existe.

## 6. async y await

Las funciones declaradas con `async` siempre devuelven una promesa. `await` permite esperar el resultado de una promesa dentro de una función asíncrona.

~~~js
function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function iniciar() {
    console.log("Inicio");
    await esperar(1000);
    console.log("Pasó un segundo");
}

iniciar();
~~~

La pausa ocurre dentro de esa función. No bloquea todo el navegador ni detiene otras tareas del programa.

### Manejar errores con try...catch

~~~js
async function cargarDatos() {
    try {
        const resultado = await obtenerDatos();
        console.log(resultado);
    } catch (error) {
        console.error("No se pudieron cargar los datos:", error.message);
    } finally {
        console.log("Consulta terminada");
    }
}
~~~

Usa `try...catch` cuando necesitas manejar errores de una operación esperada. El bloque `finally` es útil para quitar un indicador de carga o restablecer un botón.

### Ejecutar varias tareas

Si varias operaciones no dependen unas de otras, puedes iniciarlas juntas con `Promise.all()`:

~~~js
const [alumnos, materias] = await Promise.all([
    cargarAlumnos(),
    cargarMaterias()
]);
~~~

`Promise.all()` cumple cuando todas las promesas se cumplen y se rechaza si alguna falla. No esperes una operación para iniciar la siguiente cuando no exista dependencia entre ellas.

## 7. Fetch API

`fetch()` permite realizar solicitudes HTTP desde el navegador y devuelve una promesa con un objeto `Response`.

~~~js
async function cargarArchivo() {
    const respuesta = await fetch("./datos/alumnos.json");

    if (!respuesta.ok) {
        throw new Error("Error HTTP: " + respuesta.status);
    }

    const alumnos = await respuesta.json();
    console.log(alumnos);
}
~~~

El proceso tiene varios pasos:

1. `fetch()` solicita el recurso.
2. La respuesta incluye un estado HTTP.
3. Se comprueba `respuesta.ok`.
4. `respuesta.json()` lee y convierte el cuerpo de la respuesta.
5. Se usa la información recibida.

**No omitas la comprobación de `ok`.** Una respuesta HTTP como 404 no rechaza automáticamente la promesa de `fetch()`; debes revisar el estado.

### Manejar errores de fetch

~~~js
async function cargarArchivo() {
    try {
        const respuesta = await fetch("./datos/alumnos.json");

        if (!respuesta.ok) {
            throw new Error("HTTP " + respuesta.status);
        }

        const alumnos = await respuesta.json();
        return alumnos;
    } catch (error) {
        console.error("No fue posible cargar el archivo:", error.message);
        throw error;
    }
}
~~~

El método `json()` también es asíncrono y puede fallar si el cuerpo no contiene JSON válido.

### Fetch y los servidores locales

Para probar `fetch()` con un archivo JSON del proyecto, abre la página desde un servidor HTTP local, no desde el explorador de archivos. Puedes utilizar Apache/XAMPP, un servidor de desarrollo o el servidor de Python:

~~~bash
python -m http.server 8000
~~~

Después abre la dirección local que indique el servidor y navega hasta la carpeta del ejercicio. Si el servidor no encuentra el archivo, revisa la ruta y el directorio desde el que se inició.

Las solicitudes a otros dominios pueden estar sujetas a CORS. No intentes resolverlo con `mode: "no-cors"`: esa opción no permite leer normalmente el contenido de una respuesta opaca.

## 8. Errores frecuentes

| Problema | Causa posible | Qué revisar |
|---|---|---|
| `Cannot use import statement outside a module` | El script no se cargó como módulo | `type="module"` y el entorno |
| `Failed to resolve module specifier` | Ruta o nombre incorrecto | Extensión y ruta relativa |
| JSON inválido | Comillas, comas o estructura incorrectas | Valida el texto y usa try/catch |
| La promesa no muestra el resultado | Falta `then()` o `await` | Dónde se consume la promesa |
| Error no manejado | Falta `catch()` o try/catch | La cadena asíncrona completa |
| Fetch muestra 404 | Recurso no encontrado | URL y `response.ok` |
| Fetch falla desde file:// | La página se abrió como archivo | Usa un servidor HTTP local |
| El resultado es una promesa | Se olvidó esperar su valor | Usa `await` o `then()` |

## 9. Práctica

Resuelve [JS-019 a JS-024](EJERCICIOS/README.md). Los ejercicios JS-019 y JS-020 usan módulos del navegador; JS-021 a JS-023 se pueden ejecutar con Node.js; JS-024 requiere un servidor HTTP local para cargar el JSON.

## Fuentes

- [MDN — Módulos de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [MDN — Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
- [MDN — Funciones async](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN — Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN — JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Consulta también la [guía en inglés](GUIA_ASINCRONO.en.md).
