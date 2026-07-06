function convertirDolares() {
    let pesos = document.getElementById("pesos").value;
    let resultado = document.getElementById("dolares");
    let mensaje = document.getElementById("mensaje");

    const tasaCambio = 0.055;

    if (pesos === "") {
        mensaje.textContent = "Por favor, ingresa una cantidad en pesos mexicanos.";
        resultado.value = "";
        return;
    }

    if (isNaN(pesos)) {
        mensaje.textContent = "El valor ingresado debe ser numérico.";
        resultado.value = "";
        return;
    }

    let mxn = parseFloat(pesos);

    if (mxn <= 0) {
        mensaje.textContent = "La cantidad debe ser mayor que cero.";
        resultado.value = "";
        return;
    }

    let dolares = mxn * tasaCambio;

    resultado.value = dolares.toFixed(2) + " USD";
    mensaje.textContent = "";k 
}