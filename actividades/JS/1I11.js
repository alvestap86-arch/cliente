//Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar
"use strict"
{
    let parimpar = (a) => {
        if (a%2 === 0) {
            return 'par';
        }
        else {
            return 'impar';
        }
    }

    console.log(parimpar(5));
}