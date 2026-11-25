const boton = document.querySelector("#cargar");
const estado = document.querySelector("#estado");
const lista = document.querySelector("#lista");

async function cargarTareas() {
    const respuesta = await fetch("./datos/tareas.json");

    if (!respuesta.ok) {
        throw new Error("Error HTTP: " + respuesta.status);
    }

    const tareas = await respuesta.json();

    if (!Array.isArray(tareas)) {
        throw new Error("El archivo no contiene una lista de tareas.");
    }

    lista.replaceChildren();

    if (tareas.length === 0) {
        estado.textContent = "No hay tareas para mostrar.";
        return;
    }

    tareas.forEach((tarea) => {
        const elemento = document.createElement("li");
        const estadoTarea = tarea.completada ? "Completada" : "Pendiente";

        elemento.textContent = tarea.titulo + " — " + estadoTarea;
        lista.append(elemento);
    });

    estado.textContent = "Se cargaron " + tareas.length + " tareas.";
}

boton.addEventListener("click", async () => {
    boton.disabled = true;
    estado.textContent = "Cargando tareas...";

    try {
        await cargarTareas();
    } catch (error) {
        lista.replaceChildren();
        estado.textContent = "No fue posible cargar la lista: " + error.message;
    } finally {
        boton.disabled = false;
    }
});
