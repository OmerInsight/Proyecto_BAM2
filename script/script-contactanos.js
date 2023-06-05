// CONFIGURACION DE BOTON RESPONSIVE:
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive");
    });

// CONFIGURACIONES DE PAGINA DE CONTACTANOS

document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del formulario
    const nombreInput = document.getElementById("nombre-contactanos");
    const apellidoInput = document.getElementById("apellido-contactanos");
    const emailInput = document.getElementById("email-contactanos");
    const enviarBtn = document.querySelector(".boton-servicios");
    const formContactanos = document.querySelector(".form-tooltip");

    // Función para mostrar el mensaje y ocultar el formulario
    function mostrarMensaje() {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Muchas gracias por contactarnos. Durante las próximas 24 horas estaremos respondiendo tu consulta.";
        formContactanos.parentNode.insertBefore(mensaje, formContactanos);
        formContactanos.style.display = "none";
    }

    // Evento click en el botón "Enviar"
    enviarBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Validar que se hayan completado todos los campos
        if (nombreInput.value && apellidoInput.value && emailInput.value) {
            mostrarMensaje();
        }
    });
});