# Referencia rápida de JavaScript

Consulta breve de la sintaxis incluida en la unidad inicial. Para explicaciones, revisa [GUIA.md](GUIA.md).

## Salida

~~~js
console.log("Mensaje");
console.log("Total:", 25);
~~~

## Variables

~~~js
const nombre = "Alex"; // no se reasigna
let contador = 0;      // puede cambiar
contador++;
~~~

## Tipos y conversiones

~~~js
typeof "texto";          // "string"
typeof 20;               // "number"
typeof true;             // "boolean"
typeof undefined;        // "undefined"

Number("42");            // 42
String(42);               // "42"
Boolean(1);               // true
Number.isNaN(Number("x")); // true
~~~

Nota: typeof null devuelve "object" por compatibilidad histórica.

## Plantillas de texto

~~~js
const usuario = "Mara";
console.log(`Bienvenida, ${usuario}`);
~~~

## Operadores

| Grupo | Operadores |
|---|---|
| Aritméticos | + - * / % ** |
| Asignación | = += -= *= /= |
| Comparación | === !== > < >= <= |
| Lógicos | && || ! |
| Incremento | ++ -- |

Prefiere === y !== frente a == y != para evitar conversiones implícitas inesperadas.

## Condicionales

~~~js
if (condicion) {
    // instrucciones
} else if (otraCondicion) {
    // otras instrucciones
} else {
    // alternativa
}
~~~

~~~js
switch (opcion) {
    case 1:
        console.log("Uno");
        break;
    default:
        console.log("Otra opción");
}
~~~

## Ciclos

~~~js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
~~~

~~~js
let contador = 3;
while (contador > 0) {
    console.log(contador);
    contador--;
}
~~~

## Funciones

~~~js
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);
~~~

## Ejecución

~~~bash
node archivo.js
~~~

## Errores comunes

- ReferenceError: nombre no declarado o fuera de alcance.
- SyntaxError: sintaxis inválida.
- NaN: resultado numérico inválido.
- TypeError: operación no permitida para ese valor.

Más información: [MDN — JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript).
Consulta también la [referencia en inglés](REFERENCIA.en.md).
