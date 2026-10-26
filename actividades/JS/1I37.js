
// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
"use strict"

class NumerosSeparados {
    constructor(pares, impares) {
        this.pares = pares;
        this.impares = impares;
    }
}

function separarParesEimpares(numeros) {
    const pares = numeros.filter((numero) => numero % 2 === 0);
    const impares = numeros.filter((numero) => numero % 2 !== 0);

    return new NumerosSeparados(pares, impares);
}

{
    console.log(separarParesEimpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
    console.log(separarParesEimpares([10, 15, 22, 37]));
    console.log(separarParesEimpares([]));
}
