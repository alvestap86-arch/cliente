"use strict"
{
    function nombreDellaFunción (){
        let x=0;

        return x;
    }

    function f1 (param1, param2, param3=30){
        console.log(param1);
        console.log(param2);
        console.log(param3);    
    }

    // f1 ();
    f1 (2, 4, 6, 8);

    function f2 (param1, param2, ...param3){
        console.log(param1);
        console.log(param2);
        console.log(param3);    
    }

    f2(2,4);

}