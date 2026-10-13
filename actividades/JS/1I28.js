// En un vector de cadenas, indicar:
// a. La cadena más corta.
// b. La cadena más larga.
// c. La cadena con más letras ‘a’.
// d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.
"use strict"
{
    let cadenas = ["casa", "abrigo", "baño", "sol", "bota", "sala", "blanco"];

    let contarA = ((cadena) => {
        let texto = cadena.toLowerCase();
        let contador = 0;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === "a") contador++;
        }
        return contador;
    });

    let masCorta = cadenas.reduce((resultado, cadena) =>
        cadena.length < resultado.length ? cadena : resultado
    );

    let masLarga = cadenas.reduce((resultado, cadena) =>
        cadena.length > resultado.length ? cadena : resultado
    );

    let mejorA = cadenas.reduce((resultado, cadena) => {
        let totalActual = contarA(cadena);
        let totalResultado = contarA(resultado);
        return totalActual > totalResultado ? cadena : resultado;
    });

    let conB = cadenas.filter(cadena => cadena.toLowerCase().includes("b"));

    console.log("a. Cadena más corta:", masCorta);
    console.log("b. Cadena más larga:", masLarga);
    console.log("c. Cadena con más letras 'a':", mejorA, "(", contarA(mejorA), " veces)");
    console.log("d. Cadenas con 'b':", conB.length, "->", conB);
}