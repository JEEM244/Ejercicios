const estudiante = {
    nombre: "Mara",
    grupo: "5L1",
    materias: ["Programación", "Bases de datos"]
};

const textoJSON = JSON.stringify(estudiante, null, 2);

console.log("Texto JSON:");
console.log(textoJSON);

const estudianteRecuperado = JSON.parse(textoJSON);

console.log("\nDatos recuperados:");
console.log("Nombre:", estudianteRecuperado.nombre);
console.log("Grupo:", estudianteRecuperado.grupo);

const textoInvalido = '{"nombre":"Mara",}';

try {
    const datos = JSON.parse(textoInvalido);
    console.log(datos);
} catch (error) {
    console.error("No se pudo analizar el JSON:", error.message);
}
