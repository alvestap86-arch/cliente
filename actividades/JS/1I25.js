//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
"use strict";
{
    let num = 2002;

    let capicua = ((num) => {
        let str = num.toString();
        let aux = str.split("");
        let correcto = true;
        let inversa = [...aux].reverse();

        for (let i = 0; i < aux.length; i++) {
            if (aux[i] !== inversa[i]) {
                correcto = false;
            }
        }

        return correcto;
    });

    console.log(capicua(num));
}