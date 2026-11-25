function cargarGrupo(nombre, demora, fallar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fallar) {
                reject(new Error("No se pudo cargar " + nombre));
                return;
            }

            resolve("Datos de " + nombre + " listos.");
        }, demora);
    });
}

async function iniciarPanel(provocarError = false) {
    try {
        console.log("Cargando grupos...");

        const resultados = await Promise.all([
            cargarGrupo("5L1", 900),
            cargarGrupo("5L2", 500, provocarError)
        ]);

        resultados.forEach((resultado) => {
            console.log(resultado);
        });
    } catch (error) {
        console.error("Error del panel:", error.message);
    } finally {
        console.log("El proceso terminó.");
    }
}

iniciarPanel();

// Para probar el error, cambia la línea anterior por:
// iniciarPanel(true);
