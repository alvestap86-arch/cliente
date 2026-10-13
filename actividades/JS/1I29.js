//Programa una función para convertir números de base binaria a decimal y viceversa, pe.miFuncion(100,2) devolverá 4 base 10
"use strict"
{

    let binarioADecimal = ((numero) => {
        return parseInt(String(numero), 2);
    });

    let decimalABinario = ((numero) => {
        return Number(numero).toString(2);
    });

    console.log("100 en base 2 ->", binarioADecimal(100), "base 10");
    console.log("414 en base 10 ->", decimalABinario(414), "base 2");
    console.log("101010100101001 en base 2 ->", binarioADecimal(decimal), "base 10");

    let valorDecimal = 25;
    console.log("25 en base 10 ->", decimalABinario(valorDecimal), "base 2");
}









































