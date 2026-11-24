const formulario = document.querySelector("#formulario");
const estado = document.querySelector("#estado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        estado.textContent = "Hay campos que necesitan tu atención.";
        return;
    }

    const datos = new FormData(formulario);
    const nombre = datos.get("nombre");

    estado.textContent =
        "El formulario es válido para " + nombre +
        ". Los datos no fueron enviados ni guardados.";
});
