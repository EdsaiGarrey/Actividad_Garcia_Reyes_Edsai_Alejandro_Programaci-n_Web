function calcularEstudiantes() {
    // 1. Obtener elementos de la interfaz HTML
    let datos = document.getElementById("datos").value;
    let promedio = document.getElementById("promedio");
    let mayor = document.getElementById("mayor");
    let menor = document.getElementById("menor");
    let mensaje = document.getElementById("mensaje");

    // 2. Limpiar/reiniciar campos de texto y alertas
    promedio.value = "";
    mayor.value = "";
    menor.value = "";
    mensaje.textContent = "";

    // 3. Validar que el campo de entrada no esté vacío
    if (datos === "") {
        mensaje.textContent = "Por favor, ingresa los datos de los estudiantes.";
        return;
    }

    // 4. Separar el texto por líneas y preparar arreglo de objetos
    let lineas = datos.split("\n");
    let estudiantes = [];

    for (let i = 0; i < lineas.length; i++) {
        // Separar cada línea por su coma (Nombre,Calificación)
        let partes = lineas[i].split(",");

        // Validar que existan ambos datos en la línea
        if (partes.length !== 2) {
            mensaje.textContent = "Usa el formato correcto: Nombre,calificación.";
            return;
        }

        let nombre = partes[0].trim(); // Quitar espacios al nombre
        let calificacion = parseFloat(partes[1]); // Convertir nota a número

        // Validar nombre no vacío
        if (nombre === "") {
            mensaje.textContent = "El nombre del estudiante no puede estar vacío.";
            return;
        }

        // Validar que la nota sea un número válido
        if (isNaN(calificacion)) {
            mensaje.textContent = "La calificación debe ser numérica.";
            return;
        }

        // Validar que la nota esté en el rango de 0 a 100
        if (calificacion < 0 || calificacion > 100) {
            mensaje.textContent = "La calificación debe estar entre 0 y 100.";
            return;
        }

        // Crear objeto del estudiante y guardarlo en la lista
        let estudiante = {
            nombre: nombre,
            calificacion: calificacion
        };
        estudiantes.push(estudiante);
    }

    // 5. Inicializar variables para los cálculos
    let suma = 0;
    let estudianteMayor = estudiantes[0];
    let estudianteMenor = estudiantes[0];

    // Recorrer la lista para sumar notas y buscar extremos
    for (let i = 0; i < estudiantes.length; i++) {
        suma = suma + estudiantes[i].calificacion; // Sumar para el promedio

        // Buscar la calificación más alta
        if (estudiantes[i].calificacion > estudianteMayor.calificacion) {
            estudianteMayor = estudiantes[i];
        }

        // Buscar la calificación más baja
        if (estudiantes[i].calificacion < estudianteMenor.calificacion) {
            estudianteMenor = estudiantes[i];
        }
    }

    // Calcular el promedio matemático final
    let promedioGeneral = suma / estudiantes.length;

    // 6. Mostrar los resultados finales en pantalla
    promedio.value = promedioGeneral.toFixed(2); // Cortar a 2 decimales
    mayor.value = estudianteMayor.nombre + " - " + estudianteMayor.calificacion;
    menor.value = estudianteMenor.nombre + " - " + estudianteMenor.calificacion;
}