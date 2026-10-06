//Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
"use strict"
{
    const miFuncion = (texto, veces) => {
        return Array(veces).fill(texto).join(" ");
    }

    console.log(miFuncion("Hola Mundo", 3)); // Hola Mundo Hola Mundo Hola Mundo
}
