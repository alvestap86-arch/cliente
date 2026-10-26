// En un vector de números, indicar:
// a. El número de elementos del vector.
// b. Cuántos son pares y cuántos impares y cuáles son.
// c. La suma de todos los números negativos.
// d. El producto de todos los números positivos.
// e. Cuántos son primos y cuáles son.
// f. Los números que ocupan las posiciones pares del vector.
// g. El número mayor.
// h. El número menor.
// i. La media de todos los números, los números que están por encima y los que están por
// debajo.
// j. El vector ordenado de mayor a menos y viceversa.
// k. Buscar un valor introducido por el usuario e indicar si existe o no.
"use strict"
{
    let vector = [12, -5, 8, -3, 7, 15, 0, -2, 9, 4];

    function esPrimo(numero){
        if (numero < 2) return false;
        let contador = 0;
        for (let i = 2; i<numero; i++){
            if (numero%i===0){
                contador++;
            }
        }
        if (contador < 1){
            return true;
        }
        return false;
    };

    console.log("_______");
    console.log(esPrimo(2));
    console.log("_______");

    let pares = vector.filter(n => n % 2 === 0);
    let impares = vector.filter(n => n % 2 !== 0);
    let negativos = vector.filter(n => n < 0);
    let positivos = vector.filter(n => n > 0);
    let primos = vector.filter(n => esPrimo(n));
    let posicionesPares = vector.filter((_, indice) => indice % 2 !== 0);
    let mayor = Math.max(...vector);
    let menor = Math.min(...vector);
    let media = vector.reduce((total, numero) => total + numero, 0) / vector.length;
    let porEncima = vector.filter(n => n > media);
    let porDebajo = vector.filter(n => n < media);
    let ascendente = [...vector].sort((a, b) => a - b);
    let descendente = [...vector].sort((a, b) => b - a);

    let valorBuscado = (typeof prompt === "function") ? Number(prompt("Introduce un valor para buscar en el vector:")) : 7;
    let existeValor = vector.includes(valorBuscado);
    let indiceValor = vector.indexOf(valorBuscado);

    console.log("a. Número de elementos:", vector.length);
    console.log("b. Pares:", pares.length, "->", pares, "\n   Impares:", impares.length, "->", impares);
    console.log("c. Suma de negativos:", negativos.reduce((total, n) => total + n, 0));
    console.log("d. Producto de positivos:", positivos.reduce((total, n) => total * n, 1));
    console.log("e. Números primos:", primos.length, "->", primos);
    console.log("f. Posiciones pares del vector:", posicionesPares);
    console.log("g. Número mayor:", mayor);
    console.log("h. Número menor:", menor);
    console.log("i. Media:", media, "\n   Por encima:", porEncima, "\n   Por debajo:", porDebajo);
    console.log("j. Ordenado de mayor a menor:", descendente, "\n   Ordenado de menor a mayor:", ascendente);
    console.log("k. Valor buscado:", valorBuscado, "\n   Existe:", existeValor, "\n   Índice:", indiceValor);
}