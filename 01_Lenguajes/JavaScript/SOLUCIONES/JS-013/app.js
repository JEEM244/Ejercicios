const titulo = document.querySelector("#titulo");
const mensaje = document.querySelector("#mensaje");
const boton = document.querySelector("#cambiar");

boton.addEventListener("click", () => {
    titulo.textContent = "¡JavaScript está conectado!";
    mensaje.textContent = "El DOM se actualizó correctamente.";
    boton.textContent = "Actualizado";
});
