function verificarEdad() {
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");
    let mensaje = document.getElementById("mensaje");

    if (edad === "") {
        mensaje.textContent = "Por favor, ingresa tu edad.";
        resultado.value = "";
        return;
    }

    if (isNaN(edad)) {
        mensaje.textContent = "La edad debe ser un valor numérico.";
        resultado.value = "";
        return;
    }

    let edadNumero = parseInt(edad);

    if (edadNumero <= 0) {
        mensaje.textContent = "La edad debe ser un número positivo.";
        resultado.value = "";
        return;
    }

    if (edadNumero >= 18) {
        resultado.value = "Puedes votar";
    } else {
        resultado.value = "No puedes votar";
    }

    mensaje.textContent = "";
}