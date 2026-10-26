"use strict"
{
    /**
     * getElementsByTagName
     * getElementsByClassName
     * getElementsByName
     * getElementsById
     * querySelector
     * querySelectorAll
     */

    let listas = document.getElementsByTagName("ul");
    for (let elem of listas) {
        console.log(elem);
        console.log(elem.textContext);
        let myArray1 = elem.textContent.trim().split("\n");
        console.log(myArray1);
    }
    console.log("------------");
    listas = document.getElementsByClassName("cListaVehiculos");
    for (let elem of listas){
        console.log(elem);
        console.log(elem.textContent);
    }
    console.log("------------");
    listas = document.getElementsByClassName("nLinsta");
    listas.array.forEach(element => {
        console.log(elem);
        console.log(elem.textContent);
    });
    
    let elementoCiclomotor = document.getElementById("id")
}