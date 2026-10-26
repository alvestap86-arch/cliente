// Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
"use strict"

class Orden {
    constructor(asc, desc) {
        this.asc = asc;
        this.desc = desc;
    }
}

function ordenarAscYDesc(numeros) {
    const asc = [...numeros].sort((a, b) => a - b);
    const desc = [...numeros].sort((a, b) => b - a);

    return new Orden(asc, desc);
}

{
    let original = [7, 5, 7, 8, 6];
    console.log(ordenarAscYDesc(original));
    console.log("Array original sin modificar:", original);
    console.log(ordenarAscYDesc([100, 5, 15, 1, 99]));
}
