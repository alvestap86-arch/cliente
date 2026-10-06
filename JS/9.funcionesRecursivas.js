"use strict";
{
    function cuentaAtras1 (n){
        if (n === 0) {
            console.log(n);
        } else {
            console.log(n);
            cuentaAtras1(n - 1);
        }
    }

    let cuentaAtras2 = (n) => {
        if (n === 0) {
            console.log(n);
        } else {
            console.log(n);
            cuentaAtras2(n - 1);
        }
    }

    let sumaAtras = (n) => {
        if (n === 0) {
            return 0;
        } else {
            return n + sumaAtras(n - 1);
        }
    }
    let s = sumaAtras(4);
    console.log(`La sumaAtras es ${s}`);

    function esPar (num){
        if (num%2 == 0){
            console.log(`${num} Es par`);
        } else{
            console.log(`${num} Es impar`);
        }
    }

    let parStr = (n) =>  {
        if (num%2 == 0){
            return "par";
        } else{
            return "impar";
        }
    }

    


}