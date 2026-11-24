# Referencia rápida: arreglos, objetos y depuración

Para explicaciones y ejemplos, consulta [GUIA_ESTRUCTURAS.md](GUIA_ESTRUCTURAS.md).

## Arreglos

~~~js
const datos = ["A", "B", "C"];

datos[0];             // "A"
datos.length;         // 3
datos.push("D");      // agrega al final
datos.pop();          // quita y devuelve el último
datos.includes("A");  // true
datos.indexOf("B");   // 1
~~~

Recorrido:

~~~js
for (const dato of datos) {
    console.log(dato);
}
~~~

## Métodos de arreglos

| Método | Resultado |
|---|---|
| forEach(fn) | Ejecuta fn por elemento; devuelve undefined |
| map(fn) | Nuevo arreglo transformado |
| filter(fn) | Nuevo arreglo con coincidencias |
| find(fn) | Primer elemento coincidente o undefined |
| reduce(fn, inicial) | Un valor acumulado |

~~~js
const numeros = [1, 2, 3, 4];

numeros.forEach((n) => console.log(n));
numeros.map((n) => n * 2);          // [2, 4, 6, 8]
numeros.filter((n) => n > 2);       // [3, 4]
numeros.find((n) => n === 3);       // 3
numeros.reduce((total, n) => total + n, 0); // 10
~~~

## Cadenas

~~~js
const texto = "  Hola Web  ";

texto.trim();            // "Hola Web"
texto.toLowerCase();     // "  hola web  "
texto.toUpperCase();     // "  HOLA WEB  "
texto.includes("Web");   // true
texto.slice(2, 6);       // "Hola"
~~~

## Objetos

~~~js
const persona = {
    nombre: "Mara",
    edad: 17,
    saludar() {
        return "Hola, " + this.nombre;
    }
};

persona.nombre;          // notación con punto
persona["edad"];         // notación con corchetes
persona.grupo = "5L1";   // agregar propiedad
persona.saludar();       // llamar método
Object.keys(persona);    // arreglo con claves propias enumerables
~~~

## Arreglos de objetos

~~~js
const productos = [
    { nombre: "Libro", precio: 90 },
    { nombre: "Pluma", precio: 15 }
];

productos.map((p) => p.nombre);
productos.filter((p) => p.precio > 20);
productos.find((p) => p.nombre === "Libro");
~~~

## Desestructuración

~~~js
const [primero, segundo] = ["A", "B"];
const { nombre, edad } = { nombre: "Ana", edad: 16 };
~~~

## Alcance

- Global: disponible en el contexto general del script.
- Función: dentro de la función donde se declara.
- Bloque: dentro de las llaves que contienen una declaración let o const.

~~~js
function calcular() {
    const local = 10;
    return local;
}
~~~

## Depuración

~~~js
console.log("valor:", valor);
console.table(lista);
console.warn("aviso");
console.error("error");
debugger;
~~~

**debugger;** pausa la ejecución cuando hay un depurador activo.

## Más información

- [MDN — Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN — Scope](https://developer.mozilla.org/es/docs/Glossary/Scope)

Consulta también la [referencia en inglés](REFERENCIA_ESTRUCTURAS.en.md).
