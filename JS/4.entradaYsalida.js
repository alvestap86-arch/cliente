"use strict"
{
    let a = [[1,2,3],[4,5,6]];
    console.log("Hola");
    console.log(a);
    console.table(a);
    console.timeEnd("ya");

    // alert("Mensaje"+" que puedo "+"concatenar");
    
    // let respuesta = confirm ("¿Quienes cancelar tu subscripción?");
    // console.log(respuesta);
    let otrarespuesta = prompt("¿Cual es tu nombre?");
    console.log(otrarespuesta);
    console.log(typeof otrarespuesta);

    /*
        Si escape --> null
        si aceptar sin haber escrito nada--> string
        si cancelar --> null
        si aceptar con datos --> string
    */

    let valorNumerico = parseInt(otrarespuesta);
    console.log(valorNumerico);
}