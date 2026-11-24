# Guía de JavaScript: estructuras y depuración

**Nivel:** básico-intermedio.  
**Prerrequisitos:** [fundamentos de JavaScript](GUIA.md), especialmente variables, condicionales, ciclos y funciones.  
**Objetivo:** organizar datos, recorrer colecciones, comprender el alcance de las variables y encontrar errores de forma ordenada.

## 1. Arreglos

Un arreglo (*array*) guarda varios valores en una sola variable. Se crea con corchetes:

~~~js
const lenguajes = ["HTML", "CSS", "JavaScript"];
~~~

Cada elemento tiene una posición llamada índice. Los índices comienzan en cero:

~~~js
console.log(lenguajes[0]); // HTML
console.log(lenguajes[2]); // JavaScript
console.log(lenguajes.length); // 3
~~~

Un índice fuera del rango devuelve **undefined**. La propiedad **length** indica cuántos elementos contiene el arreglo.

### Agregar, quitar y consultar

~~~js
const tareas = ["Leer", "Practicar"];

tareas.push("Repasar"); // agrega al final
const ultima = tareas.pop(); // quita y devuelve el último elemento

console.log(tareas.includes("Leer")); // true
console.log(tareas.indexOf("Practicar")); // 1
~~~

**push()** modifica el arreglo y devuelve su nueva longitud. **pop()** modifica el arreglo y devuelve el elemento retirado. **includes()** responde con true o false. **indexOf()** devuelve la posición o -1 si no encuentra el valor.

### Recorrer un arreglo

Con **for...of** se obtiene directamente cada elemento:

~~~js
const materias = ["Programación", "Bases de datos", "Inglés"];

for (const materia of materias) {
    console.log(materia);
}
~~~

También puedes usar un ciclo **for** cuando necesites el índice.

## 2. Métodos de arreglos

Los métodos permiten consultar, transformar o seleccionar información. Es importante saber si modifican el arreglo original o si devuelven un resultado nuevo.

### forEach()

Ejecuta una función por cada elemento. Se usa para realizar una acción, no para construir un arreglo nuevo:

~~~js
const precios = [20, 35, 50];

precios.forEach((precio) => {
    console.log(precio);
});
~~~

### map()

Construye un arreglo nuevo transformando cada elemento:

~~~js
const precios = [20, 35, 50];
const conImpuesto = precios.map((precio) => precio * 1.16);

console.log(conImpuesto); // [23.2, 40.6, 58]
~~~

### filter()

Construye un arreglo nuevo con los elementos que cumplen una condición:

~~~js
const edades = [15, 18, 21, 16];
const mayores = edades.filter((edad) => edad >= 18);

console.log(mayores); // [18, 21]
~~~

### find()

Devuelve el primer elemento que cumple una condición. Si ninguno coincide, devuelve **undefined**:

~~~js
const usuarios = ["Ana", "Luis", "Mara"];
const encontrado = usuarios.find((usuario) => usuario === "Luis");

console.log(encontrado); // Luis
~~~

### reduce()

Combina los elementos para producir un solo resultado, por ejemplo una suma. El segundo argumento indica el valor inicial del acumulador:

~~~js
const importes = [20, 30, 15];
const total = importes.reduce((acumulado, importe) => acumulado + importe, 0);

console.log(total); // 65
~~~

Para empezar, utiliza **reduce()** cuando el resultado acumulado sea claro. Para filtrar o transformar listas, **filter()** y **map()** suelen expresar mejor la intención.

## 3. Métodos de cadenas

Las cadenas también tienen métodos. Estos métodos devuelven una cadena nueva: no cambian el texto original.

~~~js
const entrada = "  JavaScript Web  ";

console.log(entrada.trim()); // "JavaScript Web"
console.log(entrada.toLowerCase()); // "  javascript web  "
console.log(entrada.toUpperCase()); // "  JAVASCRIPT WEB  "
console.log(entrada.includes("Web")); // true
console.log(entrada.slice(2, 12)); // "JavaScript"
~~~

- **trim():** elimina espacios al inicio y al final.
- **toLowerCase():** convierte letras a minúsculas.
- **toUpperCase():** convierte letras a mayúsculas.
- **includes():** comprueba si existe una parte del texto.
- **slice():** extrae una parte usando posiciones.

Una forma común de normalizar texto es combinar **trim()** y **toLowerCase()**:

~~~js
const correo = "  Alumno@Ejemplo.com ";
const normalizado = correo.trim().toLowerCase();

console.log(normalizado); // alumno@ejemplo.com
~~~

## 4. Objetos

Un objeto reúne datos relacionados mediante propiedades con nombre:

~~~js
const estudiante = {
    nombre: "Mara",
    edad: 17,
    activo: true
};
~~~

Se puede acceder a una propiedad con punto o con corchetes:

~~~js
console.log(estudiante.nombre);
console.log(estudiante["edad"]);
~~~

La notación con corchetes es útil cuando el nombre de la propiedad está guardado en una variable:

~~~js
const campo = "nombre";
console.log(estudiante[campo]);
~~~

### Modificar y agregar propiedades

Aunque una variable declarada con **const** no se puede reasignar, las propiedades de un objeto pueden modificarse:

~~~js
estudiante.edad = 18;
estudiante.grupo = "5L1";

console.log(estudiante.edad);
console.log(estudiante.grupo);
~~~

No confundas la reasignación de la variable con la modificación del contenido del objeto.

### Objetos anidados

Una propiedad puede contener otro objeto:

~~~js
const curso = {
    nombre: "Programación web",
    tutor: {
        nombre: "Dora",
        grupo: "5L1"
    }
};

console.log(curso.tutor.nombre);
~~~

### Métodos de objetos

Un método es una función guardada como propiedad de un objeto:

~~~js
const usuario = {
    nombre: "Alex",
    presentarse() {
        return "Hola, soy " + this.nombre + ".";
    }
};

console.log(usuario.presentarse());
~~~

En esta llamada, **this** se refiere al objeto que recibe la llamada del método. No uses una función flecha como reemplazo directo de este método: las funciones flecha no crean su propio **this**.

## 5. Arreglos de objetos

Es común almacenar varios registros como objetos dentro de un arreglo:

~~~js
const productos = [
    { nombre: "Cuaderno", precio: 45, disponible: true },
    { nombre: "Lápiz", precio: 8, disponible: false },
    { nombre: "Mochila", precio: 350, disponible: true }
];
~~~

Puedes acceder a una propiedad combinando índice y punto:

~~~js
console.log(productos[0].nombre); // Cuaderno
~~~

Los métodos de arreglos también funcionan con objetos:

~~~js
const disponibles = productos.filter((producto) => producto.disponible);
const nombres = productos.map((producto) => producto.nombre);
const mochila = productos.find((producto) => producto.nombre === "Mochila");
~~~

El parámetro **producto** representa el elemento actual durante cada recorrido. El nombre del parámetro puede cambiar, pero debe describir qué contiene.

## 6. Desestructuración básica

La desestructuración permite extraer valores de un arreglo o propiedades de un objeto:

~~~js
const coordenadas = [10, 25];
const [x, y] = coordenadas;

const persona = { nombre: "Mara", edad: 17 };
const { nombre, edad } = persona;

console.log(x, y);
console.log(nombre, edad);
~~~

Los nombres de las variables de la desestructuración de objetos deben coincidir con los nombres de las propiedades, salvo que se use una asignación con alias.

## 7. Alcance de las variables

El alcance (*scope*) indica desde qué parte del programa se puede utilizar una variable.

### Alcance global

Una variable declarada fuera de funciones y bloques puede estar disponible en el resto del mismo contexto:

~~~js
const curso = "JavaScript";

function mostrarCurso() {
    console.log(curso);
}

mostrarCurso();
~~~

Evita llenar el espacio global de nombres. Prefiere declarar los datos cerca del código que los utiliza.

### Alcance de función

Una variable declarada dentro de una función solo existe dentro de esa función:

~~~js
function calcularTotal() {
    const subtotal = 100;
    return subtotal * 1.16;
}

console.log(calcularTotal());
// console.log(subtotal); // ReferenceError
~~~

Para usar un resultado fuera de la función, devuélvelo con **return**.

### Alcance de bloque

**let** y **const** respetan los bloques delimitados por llaves:

~~~js
if (true) {
    const mensaje = "Dentro del bloque";
    console.log(mensaje);
}

// mensaje no está disponible aquí.
~~~

Una variable declarada dentro de un bloque no debe usarse fuera de él. Si necesitas el valor después, declárala en el alcance adecuado y asígnala cuando corresponda.

### Sombreado de variables

Un bloque interno puede declarar una variable con el mismo nombre que otra de un bloque externo:

~~~js
const nivel = "externo";

if (true) {
    const nivel = "interno";
    console.log(nivel); // interno
}

console.log(nivel); // externo
~~~

Se trata de variables distintas. Evita abusar de esta técnica porque puede hacer que el código sea difícil de leer.

## 8. Depuración

Depurar significa encontrar y corregir la causa de un problema, no cambiar líneas al azar hasta que desaparezca.

### Proceso recomendado

1. Reproduce el problema con los mismos datos.
2. Lee el mensaje de error completo.
3. Identifica el archivo y la línea señalados.
4. Revisa los valores antes de la operación que falla.
5. Comprueba una hipótesis por vez.
6. Vuelve a ejecutar el programa con el caso original y otros valores.

### Mensajes útiles en consola

~~~js
const cantidad = 3;
const precio = 25;

console.log("Cantidad:", cantidad);
console.table([{ cantidad, precio }]);
console.warn("Aviso de revisión");
console.error("Mensaje de error de ejemplo");
~~~

**console.log()** muestra valores, **console.table()** presenta datos tabulares y **console.warn() / console.error()** ayudan a distinguir avisos y errores.

### Errores comunes

| Error | Qué suele indicar |
|---|---|
| ReferenceError | Se utilizó un nombre que no está disponible en ese alcance |
| TypeError | Se intentó realizar una operación que ese valor no permite |
| SyntaxError | El código no cumple la sintaxis del lenguaje |
| undefined | Se leyó una propiedad inexistente, un índice fuera del rango o el resultado de una función sin return |

### Pausar la ejecución

La instrucción **debugger;** pausa el programa cuando las herramientas de desarrollo están abiertas y el depurador está habilitado:

~~~js
const total = 50;
debugger;
console.log(total);
~~~

En el navegador o en un editor compatible puedes colocar puntos de interrupción (*breakpoints*), avanzar línea por línea y observar variables. Quita las instrucciones **debugger;** temporales cuando termines.

## 9. Errores frecuentes al trabajar con colecciones

- Usar índice 1 para obtener el primer elemento; el primer índice es 0.
- Confundir length con el último índice; el último índice suele ser length - 1.
- Creer que map() filtra elementos; map() transforma y filter() selecciona.
- Esperar que forEach() devuelva un arreglo; su resultado es undefined.
- Olvidar return dentro de una función de map(), filter() o find().
- Intentar acceder a propiedades de un valor undefined.
- Suponer que const vuelve inmutables los arreglos y objetos.
- Intentar usar una variable local fuera de su función o bloque.

## 10. Práctica

Continúa con [JS-007 a JS-012](EJERCICIOS/README.md). Ejecuta cada solución, modifica los datos y comprueba el resultado. Para depurar, empieza con console.log() y después prueba breakpoints en las herramientas de desarrollo.

## Fuentes

- [MDN — Arreglos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Trabajar con objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN — Alcance](https://developer.mozilla.org/es/docs/Glossary/Scope)
- [MDN — Depurar JavaScript](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)

Consulta también la [guía en inglés](GUIA_ESTRUCTURAS.en.md).
