// Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5
"use strict"
{
    let contarVocalesYConsonantes = ((texto) => {
        let vocales = 0;
        let consonantes = 0;
        let esVocal = /[aeiouáéíóúü]/i;
        let esLetra = /[a-zñáéíóúü]/i;

        for (let i = 0; i < texto.length; i++) {
            let caracter = texto.charAt(i);
            if (esVocal.test(caracter)) {
                vocales++;
            } else if (esLetra.test(caracter)) {
                consonantes++;
            }
        }
        return `Vocales: ${vocales}, Consonantes: ${consonantes}`;
    });

    console.log(contarVocalesYConsonantes("Hola Mundo"));
    console.log(contarVocalesYConsonantes("Murciélago 123"));
    console.log(contarVocalesYConsonantes(""));
}
