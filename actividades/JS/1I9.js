//Realizar una pequeña calculadora, donde el programa solicite dos números y una operación aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.
"use strict";
{
    let num1, num2, operation;
    let esValid = false;

    while (!esValid) {
        num1 = parseFloat(prompt("Introduce el primer número:"));
        num2 = parseFloat(prompt("Introduce el segundo número:"));
        operation = prompt("Introduce la operación (+, -, *, /):");

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, introduce números válidos.");
        } else if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
            alert("Por favor, introduce una operación válida (+, -, *, /).");
        } else {
            esValid = true;
        }
    }

    let resultado;
    switch (operation) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Error: División por cero.");
                resultado = undefined;
            }
            break;
    }

    if (resultado !== undefined) {
        console.log("El resultado de " + num1 + " " + operation + " " + num2 + " es: " + resultado);
    }
}
