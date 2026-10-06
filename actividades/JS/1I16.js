//Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
//Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
//del patrón.
//Ejemplo 1. Datos de entrada: 'A' y 5
//AAAAA
//AAAA
//AAA
//AA
//A

"use strict"
{
    const escribir = (char,cant) => {
        if (!Number.isInteger(cant) || cant < 1) {
            throw new TypeError("La cantidad debe ser un numero");
        }

        let resultado = "";
        for (let i = cant; i >= 1; i--) {
            resultado += char.repeat(i);
            if (i > 1) resultado += "\n";
        }

        return resultado;
    };

    console.log(escribir("A", 5));
}
