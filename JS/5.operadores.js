"use strict"
{



    let num1=3
    let num2=5
    num2+=num1;
    console.log(num2);
    num2-=num1;
    console.log(num2);
    num2*=num1;
    console.log(num2);
    num2/=num1;
    console.log(num2);
    num2%=num1;
    console.log(num2);

    let a = 10;
    let b = 10;
    if (a===b) {
        console.log("a es igual a b");
    }else{
        console.log("a no es igual a b");
    }

    let c = 10;
    let d = 10;
    if (c!=d) {
        console.log("c es diferente de d");
    }else{
        console.log("c no es diferente de d");
    }

    let edadAna, edadLuis;
    // Usamos parseInt para convertir a entero
    edadAna = parseInt(prompt("Introduce la edad de Ana", ""));
    edadLuis = parseInt(prompt("Introduce la edad de Luis", ""));

    if (typeof edadAna == "number" && typeof edadLuis == "number") {
        if (edadAna > edadLuis) {
            console.log("Ana es mayor que Luis.");
            console.log("Ana tiene " + edadAna + " años y Luis " + edadLuis);
        } else {
            console.log("Ana es menor o de igual edad que Luis.");
            console.log("Ana tiene " + edadAna + " años y Luis " + edadLuis);
        }
    }
}