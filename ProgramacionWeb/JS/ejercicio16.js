// Función flecha para sumar
const sumar = (a, b) => a + b;

// Función flecha para restar
const restar = (a, b) => a - b;

// Función flecha para multiplicar
const multiplicar = (a, b) => a * b;

// Función flecha para dividir
const dividir = (a, b) => b !== 0 ? a / b : null;

// Muestra errores con SweetAlert2
const mostrarError = (mensaje) => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje,
        confirmButtonText: "Entendido"
    });
};

// Función principal de la calculadora
const calcularOperacion = (operacion) => {
    // Obtener valores
    const valor1 = document.getElementById("numero1").value.trim();
    const valor2 = document.getElementById("numero2").value.trim();
    const resultado = document.getElementById("resultado");

    // Validar campos vacíos
    if (valor1 === "" || valor2 === "") {
        mostrarError("Debes ingresar los dos números.");
        resultado.value = "";
        return;
    }

    // Convertir a números
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);

    // Validar que sean números
    if (isNaN(numero1) || isNaN(numero2)) {
        mostrarError("Los valores ingresados deben ser números.");
        resultado.value = "";
        return;
    }

    let operacionResultado;

    // Elegir operación
    if (operacion === "suma") {
        operacionResultado = sumar(numero1, numero2);
    } else if (operacion === "resta") {
        operacionResultado = restar(numero1, numero2);
    } else if (operacion === "multiplicacion") {
        operacionResultado = multiplicar(numero1, numero2);
    } else if (operacion === "division") {
        // Evita dividir entre cero
        if (numero2 === 0) {
            mostrarError("No se puede dividir entre cero.");
            resultado.value = "";
            return;
        }

        operacionResultado = dividir(numero1, numero2);
    }

    // Mostrar resultado
    resultado.value = operacionResultado;

    // Mostrar información en consola
    console.log("Operación realizada:", operacion);
    console.log("Número 1:", numero1);
    console.log("Número 2:", numero2);
    console.log("Resultado:", operacionResultado);
};