"use strict"
{
    //Declarar un array
    let myArray = [];
    myArray[0] = "10";
    myArray[1] = "20";
    myArray[2] = "30";
    myArray[3] = "40";
    myArray[4] = "50";
    console.log(myArray);

    let myArray2 = new Array();
    myArray2[0] = "10";
    myArray2[1] = "20";
    myArray2[2] = "30";
    myArray2[3] = "40";
    myArray2[4] = "50";
    //número de elementos
    console.log(myArray2.length);

    let myArray3 = ["10", "20", "30", "40", "50"];
    console.log(myArray3);

    //clonado de un array
    let myArray4 = myArray3; // por referencia
    myArray4 = [...myArray3]; // por copia
    console.log(myArray4);
    myArray3[3] = "la madrastra";
    console.log(myArray4);

    //arrays bidimensionales
    let myArrayBi1 = new Array ();
    myArrayBi1[0] = [1, 2, 3];
    myArrayBi2[1] = [4, 5, 6];
    console.table(myArrayBi1);

    let numfilas = 2
    let numcolumnas = 3
    let myArrayBi2 = new Array(numfilas);
    for (let i=0; i<numfilas; i++){
        myArrayBi2[i] = new Array(numColumnas);
    }
    console.table (myArrayBi2);
    myArrayBi2[0][0] = null;
    console.table (myArrayBi2);

    let myArrayBi3 = Array.from(Array(numFilas), () => new Array(numColumnas));

    for (let i=0; i<numFilas; i++){
        for (let j=0; j<numColumnas; j++){
            myArrayBi3[i][j] = 0;
        }
    }

    let myArrayBi4 = new Array(numFilas).fill().map(() => new Array (numColumnas));
    console.table(myArrayBi4);

    let myArrayBi5 = [...Array(numFilas)].map (() => Array(numColumnas).fill (0));
    
    console.log("------------------");
    //OPERACIONES CON ARRAYS
    //join
    let elems = ["fuego", "aire", "agua"];
    let str = elems.join();
    console.log(str);

    //split
    let strNumbers = "1,2,3,4,5,6,7,8,9,10";
    let myArrayNumbers = strNumbers.split(",");
    console.log(myArrayNumbers);
    for(let i=0; i<myArrayNumbers.length;i++){
        myArrayNumbers[i] = parseInt(myArrayNumbers[i]);
    }
    console.log(myArrayNumbers);

    //push
    let numElems = elems.push("tierra")
    console.log(elems);

    //pop
    let ultimoElemento = elems.pop();
    console.log(ultimoElemento);
    console.log(elems);

    //shift
    let primerElemento = elems.shift();
    console.log(primerElemento);
    console.log(elems);

    //reverse
    //let reversedElems = elems.reverse();
    let reversedElems = [...elems].reverse();
    console.log(reversedElems);
    console.log(elems);

    //slice
    let nombres = ["Rita", "Manuel", "Miguel", "Ana", "Vanessa"];
    let nombresSeleccionados = nombres.slice(1,3);
    console.log(nombresSeleccionados);
    nombresSeleccionados = nombres.slice(1);
    console.log(nombresSeleccionados);
    nombresSeleccionados = nombres.slice(-2);
    console.log(nombresSeleccionados);

    //filter
    const usuarios = [
        { name: "Juan", age: 34},
        { name: "Manoli", age: 41},
        { name: "JuanFran", age: 27}
    ];
    let usuariosMayores =  usuarios.filter (function (usuario){
            return usuarios.age > 30;
    });
    let usuariosMayores2 = usuarios.filter ((usuario) => usuario.age > 30);
    console.log(usuariosMayores);
    console.log(usuariosMayores2);

    //find
    let re = /M[a-z]*/i;
    let usuarioEncontrado = usuario.find ((usuario) => usuario.name.match(re));
    console.log(usuarioEncontrado);
    usuarioEncontrado = usuarios.find ((usuario) => re.test(usuario.name));
    console.log(usuarioEncontrado);

    //some
    let existe = usuarios.some ((usuario) => usuario.age == 27);
    console.log(existe);

    //findIndex
    let index = usuarios.findIndex ((usuario) => usuario.age > 30);
    console.log(index);

    //concat
    const array1 = ["a", "b", "c"];
    const array2 = ["d", "e", "f"];
    const array3 = array1.concat(array2);
    console.log(array3);
    const array4 = [...array1, ...array2];
    console.log(array4);

    //reduce
    let sumaEdades = usuarios.reduce(function(acc, usuario){
        acc+=usuario.age
    },0);
    console.log(sumaEdades);

    //reduce (function(acumulador, valorActual){}, 0)
    sumaEdades = usuarios.reduce( (acc, usuario) =>
        acc+=usuario.age
    ,0);
    console.log(sumaEdades);

    const misNumeros = [1,2,3,4,5];

    sumaNumeros = misNumeros.reduce((acc, va)=>acc+=va, 0);
    console.log(sumaNumeros);

    const miArrayConNumeros = miArrayDeArrayConNumaros.reduce ((acc, va)=>acc+va.reduce((acc, va)=>acc.concat(va),[]));
    console.log(miArrayConNumaros);

    //include
    //falta

    // Iterar sobre los elementos del array
    //for, foreach, map, for of

    let vector = [1,2,"A", "F", -1, 2.4];
    for (let i = 0;i<vector.lenght;i++){
        console.log(elem);
    }
    vector.forEach (function (elem){
        console.log(elem)
    });
    vector.forEach (function (elem, pos){
        console.log(pos + ": "+elem);
    });

    let valores = vector.map(function (elem){
        console.log(elem);
        return "x";
    });
    console.log(valores);
    valores = vector.map ((elem) => elem+1);
    console.log(valores);

    /*
        const usuarios = [
        { name: "Juan", age: 34},
        { name: "Manoli", age: 41},
        { name: "JuanFran", age: 27}
        ];
    */
   let nuevasEdades = usuarios.map ((usuarios) => usuario.age*2);
   console.log(nuevasEdades);
   console.log(usuarios);
   let nuevosUsuarios = usuarios.map ((usuario) => {
        return {name: usuario.name, age: usuario.age*2}
   });
   console.log(nuevosUsuarios);
   let nuevosUsuarios2 = usuarios.map ((usuario) => {
        usuario.age*=2;
        return usuario;
   });
   console.log(usuarios);
   console.log(nuevosUsuarios2);

   let nuevosUsuarios3 = usuarios.map ((usuario) => {
        return {
            ...usuario,
            altura: 100
        }
   });
   console.log(nuevosUsuarios3);

   for ( let usuario of usuarios){
        console.log(usuario);
        nuevosUsuarios4.push(usuario);
   }


// ###############*##################**#**********************+*********++++++++******************++++*
// #################*################%%%#%%*%#######%#**####*************++++++++*****************+++++
// %%%##############*+************++#########************************************++++****************++
// %%%%##%%%%%%%#############################*******%%%%%%%%%%%#***#***********************************
// %%%%%%%%%%###%%%%%#######################*##%%@@@@@@@@@@@@%%@@%%############************************
// #**#%%%%%#%%%#%%%%%%%%##############+*#@@@@@@@@@@#*@@@@@@@@@@@@@@%%%%##########*********************
// %%%#%%%#%%%%%%%%%%%%%%%%%#######%%%@@@@@@@%%%***##*##%@@@@@@@@@@@@%##%%###############**************
// %%%%%%%%%%%%%%%%#%%###%%%%%%%%%%%@@@@@#++++++*+*+++++#%%%%@@@@@@@@@%%**#%#############***#**********
// #%#%%%%%%%%%#@%%%%%%%%%%%#*%%%%@%@%++++++++++*#**+++++*%%%%%@@@@@@@@%%%%*%#############****#********
// #%%%%%%%%%#%@@@@@%%%%%%%*###%###**++++++++*#####%@@%#**+#%%%%%@@@@@@@@%%%#######**+*##**##**********
// %%%%#####@#@#@%##@@@####***++++++++++++++++++++**###+++#%%%@%%@@@@@%@#@%%%#%########**#**##******##*
// ########@@##***++++++++++++++++++++++++++++++++++++**@@@%@%%%@%@@@@@@@@@%%%%%##########**####*######
// #######@@%#+++++++++++++++++++++++%@@#**+++++*###%@@@@@@@@@%%%%@@@@@@@@%@@%%%%#########+***#########
// ##%%@@@@#++++++++++++++++++++@@@@@@@@@@@@@@@@%#%@@@@@@@%@@@@%%%@@@@@@@@@@%%%%%#%%%###%##############
// ####*+%#*+++++++++++++++*@@@@@@@@@@@@@@@@@@%#**#%@@%%%%%#%%@%%%%%%@@@@@@@%%%%%%%##%%%%%#############
// #*+*++*##*+++++++++*#@@@@@@@@@@@@@@@@@%%%%@%%@#+#%@%%%@@@%%%%%%%%%@@@@@@@@%%%%%%%%%%#%#%%%##%%%#*###
// ##++*++*#%%%%%##%@@@@@@@@@@@@@@@%%@@@%%@%%##%#%###%%%%%%%@@%%%%%@@@@@#*+++@@%@@@@@@@@%%%%%%%%%%%#*##
// +++*#*++++***#***%@@@@@@%%%*@@@@@#%@@@%%@%%+++++++#%@@%%%##%#%@@@@#+++*++*#@@@@@@@@@@@@%%%#%%%%%%%*#
// ++###**+*+++++#@@@%%%%#+##++++@@%##+@@@%@%#*+++++++%%@@@%@@%@@@%+++##*+**+++%@@@@@@@@@@@%%%%%%%%%%%#
// +##%@@@@@@@@@@@%%%@@@%@%*++**@@@*##+%@%%%@*#*+++++++*%@@@####@@%##########+++++#@@@@@@@@@@%%%%%%%%%%
// *#%@@*@@@@%#@@@@@@@@@@@#++*@@@@@@**#%@%%**%*+**+++++*+*%@###@@@@*+*###*#+++++++++*@@%%@@@@@@@%%%%%%%
// %%%@@@@@@@@@@@@@@@@@%*++++*@@@@@@@@#@@%%**+*+++++++++#*#%%%#@@@@@+++*#*+++++++++++##@@@@@@@@@@@@%%**
// #*#%%%%@@@@@@@@@@@@@@@+++++%@@@@@@@@@@#++++**+++++++++++%@%@@@@@@@@+++++++++++++++++*#@@@@@@@@@@@@@%
// *++#*%*#@@@@@@@@@%@%@@@@*@%@@@@@@@@@@@%++++++*++++++#*++%%@@@@@@@@@@@*++++++++++++++++*#%@@@@@@%@@@@
// +++*###+*%#%@@@%@@@@%@@@@@@+++@@@@@@@@@+++++#++++++++++#%@@@@@@@@@@@@@@@@@%%%**+++++++++*########@@@
// ++++#+#*++###@@@@@@@@@%*#*+++*+++++#%@@#++++++++++++++*@@@@@@@@@@@@%@@@@@@@@@%%%@#+++++++++**#%#%++#
// ++++++*#+++*#*%#%##@@@%+++++%@@@@@@@*@@#*+++#*+++++++@@@@@@@@@@@%@@@@@@@@@@@@@%%##%#*+++++++++###**+
// +++++++#*++++%+#%###*@@@@@@@@@@%##%%%##%+#*++*##%##%@%##*@@@@@@@@@@%@%@@@@@@@@%%%###%@#++++++++##+++
// +++++++*#+++++#+#%#++*##@@@@@#*++#*#++***++*+++**###*+#**#@@@@@@@@@@@@@@@%@@@%%%###%@@##*+++++*###++
// ++++++++#++++++*+##++++**##@@#*+++++++##+++++++++*+*+++*###@@####******%@@@@@@@%%%#%@@##%#**#%%%%%++
// ++++++++**++++++*+**+++++**#%@#**#*++###+*++++++**##*+*###%%%%#########%###@@@@@@%%%%%###%*##+++*%%+
// +++++++++++++++++*++++++++*+*#%##*%*+####*+++++*#####+++####@#############%%%%#######%@@%@@%#+++++++
// ++++++++++++++++++**+++++++++++*%##+#####**+*+++*#####+*####%###########*##*++++##***+*%%####**+++++
// *++++++++++++++++++**++++++++*+++%#########+++++#######*%#########**##++++++++*#++#++++++++++##*++++
// %##*++++++++++++++++*+++++++++++++##########*+*+##############*++++#++++++++**+++*++++++++++++*#*+++
// #*###*++++++++++++++*++++++++++++++*+*#########*#######+###++++++*++++++***+++++++++++++++++++*+%#++
// %%%#%%##*+++++++++++*+++++++++++++++#++######*%#%####*+##*+++++++++++++++++++++++++++++++++++++++%#*
// %%%%++%%%%#*++++++++*++++++++++++++++*++***%%%@%#*#*++##+++++++++++++++*++++++++++++++++++++++++++*#
// %%%%#+#%%@%#*#*++++++++++++++++++++++++*++++##%%#*++*#*+++++++++++++++++++++++++++++++++++++++++++++
// %%%%##%%%%%%*++*#*+*++++++++++++++++++++#+++*++++++*#+++++++++++++++++++++++++++++*+++++++++++++++#*
// %%%%%%%%%%%##%%%%%*+++++++++++++++++++++++*++++++%#*+++++++++++++++++++++++++++*#+++++++++++++++++++
}
