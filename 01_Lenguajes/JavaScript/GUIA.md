# Guía de JavaScript

**Nivel:** fundamentos.  
**Prerrequisitos recomendados:** lógica básica y lectura de HTML.  
**Objetivo:** escribir programas pequeños, comprender sus datos y controlar el flujo de instrucciones.

## 1. ¿Qué es JavaScript?

JavaScript es un lenguaje de programación. En una página web se utiliza para responder a acciones, actualizar contenido y comunicarse con servicios. También puede ejecutarse fuera del navegador mediante entornos como Node.js.

HTML define la estructura, CSS describe la presentación y JavaScript agrega comportamiento. Son tecnologías diferentes que pueden trabajar juntas.

## 2. Dónde ejecutar JavaScript

### En el navegador

Abre las herramientas de desarrollador y utiliza la consola. Puedes escribir una instrucción y ver su resultado:

~~~js
console.log("Hola desde JavaScript");
~~~

En un archivo HTML, conecta un archivo externo con:

~~~html
<script src="js/app.js" defer></script>
~~~

El atributo defer permite descargar el archivo y ejecutarlo después de analizar el HTML. La ruta debe coincidir con la ubicación del archivo.

### Con Node.js

Guarda el código en un archivo, por ejemplo app.js, abre una terminal en esa carpeta y ejecuta:

~~~bash
node app.js
~~~

Node.js no es un navegador. Algunas funciones del navegador, como document y window, no existen de forma global en Node.js.

## 3. Instrucciones, mayúsculas y comentarios

JavaScript distingue entre mayúsculas y minúsculas. nombre, Nombre y NOMBRE son identificadores diferentes.

Una instrucción es una acción del programa:

~~~js
const curso = "JavaScript";
console.log(curso);
~~~

Se recomienda mantener un estilo consistente y terminar las instrucciones con punto y coma. JavaScript puede insertar algunos puntos y coma automáticamente, pero no conviene depender de reglas que no se conocen todavía.

Comentarios de una línea y de varias líneas:

~~~js
// Este comentario ocupa una línea.

/*
   Este comentario puede
   ocupar varias líneas.
*/
~~~

Los comentarios explican decisiones o contexto; no deberían repetir literalmente lo que ya dice el código.

## 4. Mostrar información

console.log() escribe información en la consola. Es útil para observar valores y revisar el avance del programa.

~~~js
const lenguaje = "JavaScript";
const version = 2026;

console.log(lenguaje);
console.log("Versión:", version);
~~~

## 5. Variables y constantes

Una variable guarda un valor con un nombre.

~~~js
const nombre = "Alex";
let puntos = 10;

puntos = 15;
console.log(nombre, puntos);
~~~

- const: se usa cuando no se reasignará la variable.
- let: se usa cuando el valor necesita cambiar.
- var: es una forma antigua que tiene reglas de alcance diferentes. No se recomienda para código nuevo de esta unidad.

Una variable declarada con const no puede recibir otra asignación. Eso no significa que los objetos que se guarden en ella sean completamente inmutables; ese tema se revisará al estudiar objetos.

Usa nombres descriptivos. Por convención, las variables suelen escribirse en camelCase: totalCompra, nombreUsuario.

## 6. Tipos de datos básicos

Los valores tienen tipos. En esta primera unidad se utilizan principalmente:

| Tipo | Ejemplo | Uso |
|---|---|---|
| string | "Hola" | Texto |
| number | 18, 3.5 | Números |
| boolean | true, false | Verdadero o falso |
| undefined | una variable sin valor asignado | Ausencia de valor asignado |
| null | null | Ausencia de valor intencional |

~~~js
const nombre = "Mara";
const edad = 17;
const activo = true;
let resultado;
const seleccion = null;

console.log(typeof nombre);     // string
console.log(typeof edad);       // number
console.log(typeof activo);     // boolean
console.log(typeof resultado);  // undefined
~~~

Una particularidad histórica: typeof null devuelve "object". Es un comportamiento conocido del lenguaje; no significa que null sea un objeto normal.

## 7. Conversión de datos

Los datos recibidos como texto no se convierten automáticamente a números en todas las operaciones.

~~~js
const cantidadTexto = "4";
const cantidad = Number(cantidadTexto);

console.log(cantidad + 2); // 6
~~~

Conversiones comunes:

~~~js
Number("25");      // 25
String(25);        // "25"
Boolean(1);        // true
Boolean(0);        // false
~~~

Number() puede producir NaN cuando el texto no representa un número válido:

~~~js
const valor = Number("catorce");
console.log(Number.isNaN(valor)); // true
~~~

No confundas NaN con un texto. Es un valor numérico especial que representa un resultado que no es un número válido.

## 8. Cadenas y plantillas

Las cadenas representan texto. Se pueden escribir con comillas simples o dobles. Las plantillas usan acentos graves y permiten insertar expresiones con ${...}.

~~~js
const nombre = "Alex";
const tema = "variables";

console.log(`Hola, ${nombre}. Hoy estudiarás ${tema}.`);
~~~

Las plantillas son útiles para combinar texto y valores sin concatenar muchas partes.

## 9. Operadores

### Aritméticos

| Operador | Operación | Ejemplo |
|---|---|---|
| + | Suma | 5 + 2 |
| - | Resta | 5 - 2 |
| * | Multiplicación | 5 * 2 |
| / | División | 5 / 2 |
| % | Residuo | 5 % 2 |
| ** | Potencia | 5 ** 2 |

El operador + también concatena cadenas:

~~~js
console.log("Hola " + "mundo");
~~~

### Comparación

~~~js
10 > 5;       // true
10 <= 5;      // false
10 === 10;    // true
10 !== "10";  // true
~~~

Prefiere === y !== porque comparan sin convertir automáticamente los tipos. == y != permiten conversiones que pueden producir resultados inesperados.

### Lógicos

- &&: AND, ambas condiciones deben ser verdaderas.
- ||: OR, al menos una condición debe ser verdadera.
- !: NOT, invierte un valor booleano.

~~~js
const tieneCuenta = true;
const pagoConfirmado = false;

console.log(tieneCuenta && pagoConfirmado); // false
console.log(tieneCuenta || pagoConfirmado); // true
console.log(!tieneCuenta);                  // false
~~~

## 10. Condicionales

if ejecuta un bloque cuando una condición es verdadera. else permite definir qué ocurre en caso contrario.

~~~js
const calificacion = 85;

if (calificacion >= 70) {
    console.log("Aprobado");
} else {
    console.log("Pendiente");
}
~~~

Se pueden encadenar condiciones con else if:

~~~js
const hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 19) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}
~~~

switch resulta útil cuando se compara el mismo valor con varias opciones:

~~~js
const opcion = 2;

switch (opcion) {
    case 1:
        console.log("Inicio");
        break;
    case 2:
        console.log("Configuración");
        break;
    default:
        console.log("Opción desconocida");
}
~~~

break evita continuar con el siguiente caso. default se ejecuta cuando no hay coincidencia.

## 11. Ciclos

Los ciclos repiten instrucciones.

### for

Se usa cuando la repetición tiene un contador o una cantidad de pasos conocida.

~~~js
for (let numero = 1; numero <= 5; numero++) {
    console.log(numero);
}
~~~

El ciclo tiene tres partes: valor inicial, condición y actualización.

### while

Se repite mientras la condición sea verdadera.

~~~js
let intentos = 3;

while (intentos > 0) {
    console.log("Intentos restantes:", intentos);
    intentos--;
}
~~~

Asegúrate de modificar la condición dentro del ciclo cuando corresponda. Si nunca deja de ser verdadera, el programa puede quedar ejecutándose indefinidamente.

### break y continue

- break termina el ciclo.
- continue salta a la siguiente repetición.

Úsalos cuando mejoren la claridad; evita crear ciclos difíciles de seguir.

## 12. Funciones

Una función agrupa instrucciones que realizan una tarea. Puede recibir parámetros y devolver un resultado.

~~~js
function sumar(a, b) {
    return a + b;
}

const total = sumar(4, 6);
console.log(total); // 10
~~~

- Parámetros: nombres que recibe la función.
- Argumentos: valores enviados al llamar la función.
- return: devuelve un resultado y termina la ejecución de esa llamada.

Una función puede no devolver un valor explícito. En ese caso, su resultado es undefined.

## 13. Errores frecuentes

| Problema | Causa habitual | Revisión |
|---|---|---|
| ReferenceError | Nombre inexistente o variable fuera de alcance | Revisa escritura y lugar de declaración |
| SyntaxError | Sintaxis incompleta o incorrecta | Revisa paréntesis, llaves, comillas y separadores |
| NaN | Conversión u operación numérica no válida | Revisa el valor antes de convertir |
| Resultado como texto | Se combinaron cadenas en vez de números | Convierte los datos cuando sea necesario |
| Ciclo infinito | La condición nunca deja de ser verdadera | Revisa la actualización del contador |

## 14. Práctica recomendada

Resuelve los ejercicios en orden: [JS-001 a JS-006](EJERCICIOS/README.md). Ejecuta cada archivo con Node.js o en la consola del navegador. Cambia los valores de entrada y comprueba cómo cambia el resultado.

## Fuentes

- [MDN — Guía de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [MDN — Tipos de datos y estructuras](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
- [MDN — Operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [Node.js — Ejecutar scripts](https://nodejs.org/en/learn/command-line/run-nodejs-scripts)

Consulta también la [guía en inglés](GUIA.en.md).
