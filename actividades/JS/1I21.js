// Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
"use strict"
{
    let str = "Hola Mundo";
    let aux = str.split("");
    aux.reverse();
    str = aux.join("");

    console.log(str);
}