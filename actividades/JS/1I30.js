// Programa una función para saber la edad de una persona, sabiendo la fecha de nacimiento.
"use strict"
{
    let calcularEdad = ((fechaNacimiento) => {
        let fecha = new Date(fechaNacimiento);
        let hoy = new Date();
        let edad = hoy.getFullYear() - fecha.getFullYear();
        let mesActual = hoy.getMonth();
        let mesNacimiento = fecha.getMonth();
        let diaActual = hoy.getDate();
        let diaNacimiento = fecha.getDate();

        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }

        return edad;
    });

    console.log("Edad para 2005-10-15:", calcularEdad("2005-10-15"), "años");
    console.log("Edad para 1999-12-31:", calcularEdad("1999-12-31"), "años");
    console.log("Edad para 2010-06-20:", calcularEdad("2010-06-20"), "años");
}