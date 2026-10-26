"use strict"
{
    let puntuacionA = 0;
    let puntuacionB = 0;
    let jugadas = 0;
    let empates = 0;
    let regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/;
    let nombre1;
    let nombre2;
   

    let nombreJugador = (numeroJug) => {
        let nombre;
        let esvalido = false;
        while(!esvalido) {
            nombre = prompt("introduce el nombre del jugador "+numeroJug , "");
            esvalido = regexNombre.test(nombre.toString());
            if (!esvalido){
                alert("Nombre no valido");
            }
        }
        return nombre;
    }
    
    let juego = (nombre1, nombre2) => {
        let esvalido = false;
        let op1;
        let op2;
        alert("turno de "+nombre1);
        while (!esvalido){
            op1 = prompt("introduce tu opción (R, P, S)", "")
            if (op1 === "R" || op1 === "P" || op1 === "S"){
                esvalido = true;
            } else {
                alert("Opción no válida");
            }
        }
        esvalido = false;
        alert("turno de "+nombre2);
        while (!esvalido){
            op2 = prompt("introduce tu opción (R, P, S)", "")
            if (op2 === "R" || op2 === "P" || op2 === "S"){
                esvalido = true;
            } else {
                alert("Opción no válida");
            }
        }
        alert("Opciones válidas");
        let ganadorRonda;
        jugadas++;
        if (op1 === "R"){
            switch (op2) {
                case "R":
                    empates++;
                    ganadorRonda = "empate";
                    break;
                case "P":
                    puntuacionB++;
                    ganadorRonda = nombre2;
                    break;
                case "S":
                    puntuacionA++;
                    ganadorRonda = nombre1;
                    break;
            }
        }
        if (op1 === "P"){
            switch (op2) {
                case "R":
                    puntuacionA++;
                    ganadorRonda = nombre1;
                    break;
                case "P":
                    empates++;
                    ganadorRonda = "empate";
                    break;
                case "S":
                    puntuacionB++;
                    ganadorRonda = nombre2;
                    break;
            }
        }
        if (op1 === "S"){
            switch (op2) {
                case "R":
                    puntuacionB++;
                    ganadorRonda = nombre2;
                    break;
                case "P":
                    puntuacionA++;
                    ganadorRonda = nombre1;
                    break;
                case "S":
                    empates++;
                    ganadorRonda = "empate";
                    break;
            }
        }
        alert("Número de jugadas realizadas: "+jugadas);
        alert("Elección de "+nombre1+": "+op1);
        alert("Elección de "+nombre2+": "+op2);
        alert("Ganador de la ronda: "+ganadorRonda);
        alert("puntuación de "+nombre1+": "+puntuacionA);
        alert("puntuación de "+nombre2+": "+puntuacionB);
    }
    
    alert("Bienvenido a piedra, papel o tijeras");
    nombre1 = nombreJugador(1);
    nombre2 = nombreJugador(2);
    alert("nombres correctos");
    while (jugadas<5 && puntuacionA<3 && puntuacionB<3){
        juego(nombre1, nombre2);
    }
    alert("Juego concluido");
    alert("Número total de jugadas realizadas: "+jugadas);
    alert("Número total de victorias de "+nombre1+": "+puntuacionA);
    alert("Número total de victorias de "+nombre2+": "+puntuacionB);
    alert("Número total de empates: "+empates);
    if (puntuacionA == puntuacionB){
        alert("Ganador: EMPATE");
    }
    else{
        if (puntuacionA>puntuacionB){
            alert("Ganador: "+nombre1);
        } else {
            alert("Ganador: "+nombre2);
        }
    }
}