// Programa una función que dado un array devuelva el número más alto y el más bajo de dicho array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]
// (En el ejemplo del enunciado el más bajo es -2, ya que -60 no está en el array.)
"use strict"
{
    let masAltoYMasBajo = ((numeros) => {
        let masAlto = Math.max(...numeros);
        let masBajo = Math.min(...numeros);
        return [masAlto, masBajo];
    });

    console.log(masAltoYMasBajo([1, 5, 34, 99, -2]));
    console.log(masAltoYMasBajo([7]));
    console.log(masAltoYMasBajo([-10, -3, -50, -1]));
}
