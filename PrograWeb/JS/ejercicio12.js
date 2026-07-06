function suma() {
    // obtiene el valor del elemento con id num1 y num2
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    // convierte los valores a enteros y los suma
    var resultado = parseInt(num1) + parseInt(num2);
    
    // muestra el resultado en el elemento con id resultado
    document.getElementById("resultado").innerHTML = resultado;
    
    console.log("Y si si");
}

function multiplicar() {
    // obtiene el valor del elemento con id num3 y num4
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    
    // convierte los valores a enteros y los multiplica
    var resultado = parseInt(num3) * parseInt(num4);
    
    // muestra el resultado en el elemento con id resultadoMulti
    document.getElementById("resultadoMulti").innerHTML = resultado;
    
    // Log pedido por la profa
    console.log("Y si si");
}