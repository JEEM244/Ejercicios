// JS-012: Depurar un programa

const precios = [10, 20, 30];

function calcularTotal(lista) {
    let total = 0;

    for (const precio of lista) {
        total += precio;
    }

    return total;
}

function crearEtiqueta(usuario) {
    return "Alumno: " + usuario.nombre;
}

function crearAviso() {
    let mensaje;

    if (true) {
        mensaje = "Revisa tus ejercicios.";
    }

    return mensaje;
}

console.log("Total:", calcularTotal(precios));
console.log(crearEtiqueta({ nombre: "Mara" }));
console.log("Aviso:", crearAviso());
