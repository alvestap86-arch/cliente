// Programa una función que dado un array de elementos, elimine los duplicados, pe.e miFuncion (“x”,10,”x”,2,”10”,10,true,true) devolverá [“x”,10,2,”10”,true]
"use strict"
{
    let eliminarDuplicados = ((elementos) => {
        return [...new Set(elementos)];
    });

    console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]));
    console.log(eliminarDuplicados([1, 1, 1, 1]));
    console.log(eliminarDuplicados([]));
}
