function calcularDatos() {
    let entrada = document.getElementById("numeros").value;
    let mayor = document.getElementById("mayor");
    let menor = document.getElementById("menor");
    let promedio = document.getElementById("promedio");
    let mensaje = document.getElementById("mensaje");

    if (entrada === "") {
        mensaje.textContent = "Por favor, ingresa varios números separados por comas.";
        mayor.value = "";
        menor.value = "";
        promedio.value = "";
        return;
    }

    let arregloTexto = entrada.split(",");
    let numeros = arregloTexto.map(Number);

    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            mensaje.textContent = "Todos los valores deben ser números.";
            mayor.value = "";
            menor.value = "";
            promedio.value = "";
            return;
        }
    }

    let numeroMayor = Math.max(...numeros);
    let numeroMenor = Math.min(...numeros);

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    let prom = suma / numeros.length;

    mayor.value = numeroMayor;
    menor.value = numeroMenor;
    promedio.value = prom.toFixed(2);

    mensaje.textContent = "";
}