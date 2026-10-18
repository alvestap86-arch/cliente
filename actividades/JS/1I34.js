// Programa una función que valide que un texto sea un email válido, p.e. miFuncion (“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.
"use strict"
{
    let emailValido = ((texto) => {
        // [letras, números, punto, guión y guión bajo] @ [letras, números, punto, guión] . [al menos 2 letras]
        let expresion = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return expresion.test(texto);
    });

    console.log(emailValido("javier.ferrer@iesmartinezm.es"));
    console.log(emailValido("javier_ferrer-99@correo.com"));
    console.log(emailValido("javier.ferrer@iesmartinezm"));
    console.log(emailValido("javier.ferrer@iesmartinezm.e"));
    console.log(emailValido("@iesmartinezm.es"));
    console.log(emailValido("javier ferrer@iesmartinezm.es"));
}
