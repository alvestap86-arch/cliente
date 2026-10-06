//Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
"use strict"
{
    let horas = 10;
    let minutos = 59;
    let segundos = 59;

    segundos++;
    if (segundos > 59){
        segundos = 0;
        minutos++;
        if (minutos > 59){
            minutos = 0;
            horas++;
            if (horas > 23){
                horas = 0;
            }
        }
    }

    console.log("La hora será: " + horas + ":" + minutos + ":" + segundos);
}