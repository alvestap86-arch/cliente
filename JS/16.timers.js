"use strict"
{
    //temporizadores
    setTimeout (function (){
        console.log("timeout");
    },2000);
    console.log("2");

    //callback
    setTimeout(f,4000);
    setTimeout(f(), 5000);
    
    function f() {
        console.log("timeout f");
    }
    console.log("3");

    let codigo = setInterval(Float32Array,1000);
    function f2(){
        console.log("timeout f2");
    }

    setTimeout(Float32Array, 10000);
}
                                                                                         
                                                                                         
                                                                                         
                                                                                         
//       -=++**+-                                           
//     -.-:*+%-##.  -=                                      
//     % +=----+ .+*+--                                     
//       #@-#:#@@@#==                                       
//     =@@@@+@+:#%%-:                                       
//    -%%@@%@%#-*%*#%*                                      
//     =*+##@@#. -=%@@                                      
//      .-=-+. : ..=*=                                      
//       ----  -=:-@+                                       
//        ..=  -*@@@@@@*-                                   
//              -#%#@@@@%@*                                 
//                .-#@@#@@@#                                
//                ----*@@@@% =                              
//                :---.++==+**                              
//                 ----:#@@#-.                              
//               ----*@@@%*-                                
//             :##=---*+%%+                                 
//              -----###-                                   
//              -+-=**:                                     
//              ..@#%-                                      
//              -+.@*-- --                                  
//                -+=:                                      
                                           