// script.js
const boton = document.getElementById("miBotoncito");
if (boton) {
    boton.onclick = function() {
        window.location.href = "pagina-siguiente.html"; // Redirige a la segunda página
    };
}
// Código para la segunda página (siguiente-pagina.html)
const verificarBtn = document.getElementById("verificarBtn");
if (verificarBtn) {
    verificarBtn.onclick = function() {
        const nombreIngresado = document.getElementById("nombreInput").value.trim();

        if (nombreIngresado.toLowerCase() === "diego") {
            alert("¡Correcto! Has adivinado el nombre.");
            // Aquí puedes redirigir a otra página si lo deseas
        } else {
            alert("Incorrecto. Regresando a la página principal.");
            window.location.href = "index.html"; // Redirige a la primera página si es incorrecto
        }
    };
}
