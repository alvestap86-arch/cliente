"use strict";
{
    function sumar(a, b) {
        return a + b;
    }

    let sumar1 = (a, b) => a + b;

    console.log(sumar1(2, 3));
    let sumar2 = (a, b) => {
        return a + b;
    }
    console.log(sumar2(2, 3));
    console.log(sumar(2, 3));
}