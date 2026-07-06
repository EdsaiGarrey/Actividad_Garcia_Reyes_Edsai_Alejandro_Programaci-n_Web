function convertirMillas() {
    let kilometros = document.getElementById("kilometros").value;
    let resultado = document.getElementById("millas");
    let mensaje = document.getElementById("mensaje");

    if (kilometros === "") {
        mensaje.textContent = "Por favor, ingresa una distancia en kilómetros.";
        resultado.value = "";
        return;
    }

    if (isNaN(kilometros)) {
        mensaje.textContent = "El valor ingresado debe ser numérico.";
        resultado.value = "";
        return;
    }

    let km = parseFloat(kilometros);
    let millas = km * 0.621371;

    resultado.value = millas.toFixed(5) + " millas";
    mensaje.textContent = "";
}