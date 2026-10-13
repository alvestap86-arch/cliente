//Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras “a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.
"use strict"
{
    let cadena1 = "maria";
    let cadena2 = "dado";

    let comprobarCadenas = ((texto) => {
        let empiezaBien = texto.startsWith("m") || texto.startsWith("d");
        let terminaBien = texto.endsWith("a") || texto.endsWith("o");
        return empiezaBien && terminaBien;
    });

    let comprobarRegex = ((texto) => {
        let expresion = /^[md].*[ao]$/i;
        return expresion.test(texto);
    });

    console.log("Con cadenas:");
    console.log(comprobarCadenas(cadena1));
    console.log(comprobarCadenas(cadena2));
    console.log("Con expresiones regulares:");
    console.log(comprobarRegex(cadena1));
    console.log(comprobarRegex(cadena2));

}