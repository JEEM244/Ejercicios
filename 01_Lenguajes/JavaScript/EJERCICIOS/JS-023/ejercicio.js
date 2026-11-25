// JS-023: ejecuta dos tareas independientes en paralelo.

function cargarGrupo(nombre, demora, fallar = false) {
    // TODO 1: devuelve una promesa.
    // Espera el tiempo indicado con setTimeout().
    // Resuelve con el nombre del grupo o rechaza con Error.
}

async function iniciarPanel() {
    try {
        console.log("Cargando grupos...");

        // TODO 2: inicia las dos consultas con Promise.all().
        // Usa await para recibir ambos resultados.

        // TODO 3: muestra los dos resultados.
    } catch (error) {
        // TODO 4: muestra un mensaje de error.
    } finally {
        // TODO 5: indica que el proceso terminó.
    }
}

iniciarPanel();
