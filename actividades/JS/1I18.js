//Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".
"use strict"
{
    const miFuncion = (texto, cantidad) => {
        return texto.substring(0, cantidad);
    }

    console.log(miFuncion("Hola Mundo", 4)); // Hola
}
