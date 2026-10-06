//Programa una función que dada una String te devuelva un Array de textos separados por cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
"use strict"
{
    const miFuncion = (texto, caracter) => {
        return texto.split(caracter);
    }

    console.log(miFuncion("hola que tal", " "));
}
