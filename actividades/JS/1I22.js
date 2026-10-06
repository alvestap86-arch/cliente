 //Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
"use strict"
{
    let str = "hola mundo adios mundo";
    
    let repetidos = ((str, palabra) => {
        let aux = str.split(" ");
        let num = 0;
        aux.forEach(element => {
            if (element === palabra){
                num++;
            }
        });
        return num;
    });
   
    console.log(repetidos(str, "mundo"));


}