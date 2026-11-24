// JS-003: Operadores y cálculo de totales

const precioUnitario = 89.90;
const cantidad = 3;
const descuento = 0.10;

const subtotal = precioUnitario * cantidad;
const ahorro = subtotal * descuento;
const total = subtotal - ahorro;

console.log("Subtotal:", subtotal.toFixed(2));
console.log("Descuento:", ahorro.toFixed(2));
console.log("Total:", total.toFixed(2));
