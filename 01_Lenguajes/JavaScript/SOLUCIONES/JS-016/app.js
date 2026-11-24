const formulario = document.querySelector("#formulario");
const campoTarea = document.querySelector("#tarea");
const lista = document.querySelector("#lista");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const texto = campoTarea.value.trim();

    if (texto === "") {
        campoTarea.focus();
        return;
    }

    const elemento = document.createElement("li");
    elemento.textContent = texto;
    lista.append(elemento);

    campoTarea.value = "";
    campoTarea.focus();
});
