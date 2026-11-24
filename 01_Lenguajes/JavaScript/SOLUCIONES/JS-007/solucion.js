// JS-007: Crear y recorrer arreglos

const materiales = ["Cuaderno", "Pluma"];

materiales.push("Regla");

console.log("Primer elemento:", materiales[0]);
console.log("Cantidad:", materiales.length);
console.log("¿Incluye Cuaderno?", materiales.includes("Cuaderno"));

const eliminado = materiales.pop();
console.log("Elemento retirado:", eliminado);

for (const material of materiales) {
    console.log("Material:", material);
}
