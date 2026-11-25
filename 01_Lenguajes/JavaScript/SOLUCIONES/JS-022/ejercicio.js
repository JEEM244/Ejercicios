function consultarEstado(correcto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (correcto) {
                resolve("La consulta terminó correctamente.");
            } else {
                reject(new Error("No fue posible completar la consulta."));
            }
        }, 700);
    });
}

console.log("Iniciando consulta correcta...");

consultarEstado(true)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Primera operación finalizada.");
    });

console.log("Iniciando consulta que fallará...");

consultarEstado(false)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error("Error esperado:", error.message);
    })
    .finally(() => {
        console.log("Segunda operación finalizada.");
    });
