// Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800
"use strict";
{
    const miFuncion = (cantidad, descuento) => {
        return cantidad - (cantidad * descuento) / 100;
    };

    console.log(miFuncion(1000, 20)); // 800
}