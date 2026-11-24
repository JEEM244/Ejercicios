// JS-002: Tipos de datos y conversiones

const nombreProducto = "Cuaderno";
const precioTexto = "125";
const unidadesTexto = "3";

const precio = Number(precioTexto);
const unidades = Number(unidadesTexto);
const subtotal = precio * unidades;

console.log("Producto:", nombreProducto);
console.log("Tipo del precio original:", typeof precioTexto);
console.log("Subtotal:", subtotal);
console.log("¿La conversión del precio produjo NaN?", Number.isNaN(precio));
