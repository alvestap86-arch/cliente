//. Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidoshasta introducir un número negativo y entonces mostrar el resultado.
"use strict";
{
    let num = 0;
    let suma = 0;
    let producto = 1;
    let contador = 0;

    while (num >= 0) {
        num = parseFloat(prompt("Introduce un número (negativo para salir):"));
        if (num >= 0) {
            suma += num;
            producto *= num;
            contador++;
        }
    }

    if (contador > 0) {
        let media = suma / contador;
        console.log("Suma: " + suma);
        console.log("Producto: " + producto);
        console.log("Media: " + media);
    } else {
        console.log("No se introdujeron números válidos.");
    }
}