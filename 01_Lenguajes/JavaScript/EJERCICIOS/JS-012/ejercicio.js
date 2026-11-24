// JS-012: Depurar un programa
// Este archivo contiene tres errores intencionales.

const precios = [10, 20, 30];

function calcularTotal(lista) {
    let total = 0;

    for (const precio of lista) {
        total = precio; // ERROR 1: no acumula los valores.
    }

    return total;
}

function crearEtiqueta(usuario) {
    return "Alumno: " + usuairo.nombre; // ERROR 2: nombre mal escrito.
}

function crearAviso() {
    if (true) {
        const mensaje = "Revisa tus ejercicios.";
    }

    return mensaje; // ERROR 3: mensaje solo existe dentro del bloque.
}

console.log("Total:", calcularTotal(precios));
console.log(crearEtiqueta({ nombre: "Mara" }));
console.log("Aviso:", crearAviso());
