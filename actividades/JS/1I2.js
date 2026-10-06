//Modifica el programa anterior: si los números no son un número o son menores o iguales a ceros, que los vuelva a pedir.
"use strict"
{
    let num1, num2;
    do {
        num1 = parseFloat(prompt("Introduce el primer número:"));
        num2 = parseFloat(prompt("Introduce el segundo número:"));
    } while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0);

    if (num1 > num2) {
        console.log("El primer número es mayor.");
    } else if (num1 < num2) {
        console.log("El segundo número es mayor.");
    } else {
        console.log("Los números son iguales.");
    }
}
