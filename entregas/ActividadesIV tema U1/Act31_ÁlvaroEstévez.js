// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion ("01/12/2010")
"use strict"
{
    let aniosTranscurridos = ((fechaDada) => {
        let fecha;
        if (typeof fechaDada === "string") {
            // Formato dd/mm/aaaa
            let partes = fechaDada.split("/");
            fecha = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]));
        } else {
            fecha = fechaDada;
        }

        if (isNaN(fecha.getTime())) {
            return "Fecha no válida";
        }

        let hoy = new Date();
        let anios = hoy.getFullYear() - fecha.getFullYear();
        if (hoy.getMonth() < fecha.getMonth() || (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())) {
            anios--;
        }
        return anios;
    });

    console.log("Desde new Date(1984,4,23):", aniosTranscurridos(new Date(1984, 4, 23)), "años");
    console.log('Desde "01/12/2010":', aniosTranscurridos("01/12/2010"), "años");
    console.log('Desde "31/02/abc":', aniosTranscurridos("31/02/abc"));
}
