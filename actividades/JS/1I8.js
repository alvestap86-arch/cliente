//Mostrar la tabla de multiplicar de un número introducido por pantalla.
"use strict";
{
    let num = parseFloat(prompt("Introduce un número:"));
    console.log("Tabla de multiplicar del " + num + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}