//Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
"use strict"
{
    let miFuncion = (n) => {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }

        return factorial;
    }

    console.log(miFuncion(5)); // 120
}