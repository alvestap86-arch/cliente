//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
"use strict"
{
    let str = "salas";

    let palindromo = ((str) => {
        let aux = str.split("");
        let correcto = true;
        let inversa = [...aux].reverse();
        for (let i=0;i<aux.length;i++){
            if (aux[i] !== inversa[i]){
                correcto = false;
            }
        };
        return correcto;
    });

    console.log(palindromo(str));
}