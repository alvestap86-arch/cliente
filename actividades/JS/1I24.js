//Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5."
"use strict"
{
    let texto = "xyz1, xyz2, xyz3, xyz4 y xyz5";
    let patron = "xyz";

    let eliminarPatron = ((texto, patron) => {
        return texto.split(patron).join("");
    });

    console.log(eliminarPatron(texto, patron));
}