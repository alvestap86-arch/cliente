// Programa una función para devolver la edad de una persona dada su fecha de nacimiento en este formato dd/mm/aaaa.
"use strict"
{
    let edadDesdeFecha = ((fechaNacimiento) => {
        let formato = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!formato.test(fechaNacimiento)) {
            return "Formato no válido (dd/mm/aaaa)";
        }

        let [dia, mes, anio] = fechaNacimiento.split("/").map((parte) => parseInt(parte));
        let fecha = new Date(anio, mes - 1, dia);

        // Comprueba que la fecha existe (por ejemplo 31/02/2000 no existe)
        if (fecha.getDate() !== dia || fecha.getMonth() !== mes - 1 || fecha.getFullYear() !== anio) {
            return "La fecha no existe";
        }

        let hoy = new Date();
        let edad = hoy.getFullYear() - anio;
        if (hoy.getMonth() < fecha.getMonth() || (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < dia)) {
            edad--;
        }
        return edad;
    });

    console.log("Edad para 23/05/1984:", edadDesdeFecha("23/05/1984"));
    console.log("Edad para 01/12/2010:", edadDesdeFecha("01/12/2010"));
    console.log("Edad para 31/02/2000:", edadDesdeFecha("31/02/2000"));
    console.log("Edad para 2000-02-10:", edadDesdeFecha("2000-02-10"));
}
