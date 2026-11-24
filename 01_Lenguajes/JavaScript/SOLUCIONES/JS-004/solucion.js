// JS-004: Condicionales y operadores lógicos

const montoCompra = 420;
const compraMinima = 500;
const clienteFrecuente = true;

let costoEnvio = 80;
let mensaje = "";

if (montoCompra >= compraMinima || clienteFrecuente) {
    costoEnvio = 0;
    mensaje = "Envío gratis";
} else {
    mensaje = "El envío tiene costo";
}

console.log(mensaje);
console.log("Costo de envío:", costoEnvio.toFixed(2));
