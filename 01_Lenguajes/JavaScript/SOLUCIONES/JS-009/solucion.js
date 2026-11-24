// JS-009: Limpiar y consultar cadenas

const entrada = "  JavaScript Web  ";

const textoLimpio = entrada.trim();
const textoNormalizado = textoLimpio.toLowerCase();
const textoMayusculas = textoLimpio.toUpperCase();
const contieneJavaScript = textoNormalizado.includes("javascript");
const primeraPalabra = textoLimpio.slice(0, 10);

console.log("Original:", entrada);
console.log("Limpio:", textoLimpio);
console.log("Normalizado:", textoNormalizado);
console.log("Mayúsculas:", textoMayusculas);
console.log("¿Incluye javascript?", contieneJavaScript);
console.log("Primera palabra:", primeraPalabra);
