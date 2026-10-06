//Mostrar todos los números divisores de un número introducido por el usuario
"use strict";
{
    let num = parseFloat(prompt("Introduce un número:"));
    console.log("Divisores de " + num + ":");
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}