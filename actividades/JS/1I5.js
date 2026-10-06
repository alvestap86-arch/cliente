//Mostrar todos los números que hay entre dos números introducidos por el usuario
"use strict";
{
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let menor = Math.min(num1, num2);
    let mayor = Math.max(num1, num2);

    console.log("Números entre " + menor + " y " + mayor + ":");
    for (let i = menor + 1; i < mayor; i++) {
        console.log(i);
    }
}