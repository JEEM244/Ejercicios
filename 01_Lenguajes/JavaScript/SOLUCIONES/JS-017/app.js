const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);
    const nombre = datos.get("nombre");
    const grupo = datos.get("grupo");
    const turno = datos.get("turno");

    resultado.textContent =
        "Nombre: " + nombre + "\n" +
        "Grupo: " + grupo + "\n" +
        "Turno: " + turno;
});
