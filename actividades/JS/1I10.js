//Programa una función que determine si un número es primo (aquel que solo es divisible porsí mismo y 1) o no, pe. miFuncion(7) devolverá true
"use strict";
{
    console.log(esPrimo(13));

    function esPrimo(num) {
        let cuadrado = num*num;
        let resultado = true;
        if (num <= 1) {
            resultado = false;
        }
        for (let i = 2; i <= cuadrado; i++) {
            if (num % i === 0 && i !== num) {
                resultado = false;
            }
        }
        return resultado;
    }
}