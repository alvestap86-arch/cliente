//Programa una función que obtenga un numero aleatorio entre 501 y 600.
"use strict"
{
    let random500 = () => {
        return Math.floor((Math.random()*100+501));
    }

    console.log("numero aleatorio: ", random500());
}