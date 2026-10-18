// Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
"use strict"
{
    let elevarAlCuadrado = ((numeros) => {
        return numeros.map((numero) => Math.pow(numero, 2));
    });

    console.log(elevarAlCuadrado([1, 4, 5]));
    console.log(elevarAlCuadrado([-2, 0, 3, 10]));
    console.log(elevarAlCuadrado([]));
}
