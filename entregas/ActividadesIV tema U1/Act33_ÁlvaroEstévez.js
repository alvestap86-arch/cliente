// Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como ¡o¿
"use strict"
{
    let nombreValido = ((texto) => {
        // Solo letras (con tildes, ñ y ü), separadas por un único espacio
        let expresion = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(\s[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/;
        return expresion.test(texto);
    });

    console.log(nombreValido("Javier Ferrer"));
    console.log(nombreValido("María José Núñez"));
    console.log(nombreValido("Javier2 Ferrer"));
    console.log(nombreValido("¡Javier! Ferrer"));
    console.log(nombreValido("¿Quién?"));
    console.log(nombreValido(""));
}
