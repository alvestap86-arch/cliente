"use strict"
{
    let fecha = new Date ();
    console.log(fecha);
    let fecha2 = new Date("1979/05/30 14:30:15");
    console.log(fecha2);
    let fecha3 = new Date (1979,4,30,14,30,15);
    console.log(fecha3);
    let fecha4 = new Date (1979,4,30);
    console.log(fecha4);
    let fecha5 = new Date ("1979/05/30 14:30:15.857");
    console.log(fecha5);

    console.log(fecha5.getDay()); //domingo = 0; lunes = 1
    console.log(fecha5.getDate()); //el dia de la fecha
    console.log(fecha5.getMonth()); //el numero del mes (enero = 0)
    console.log(fecha5.getFullYear()); //año de la fecha
    console.log(fecha5.getHours());
    console.log(fecha5.getMinutes());
    console.log(fecha5.getSeconds());
    console.log(fecha5.getMilliseconds());
    console.log(fecha5.getTimezoneOffset());
    console.log(fecha5.getTime()); //milisegundos desde 01/01/1970 00:00:00

    fecha5.setMonth(11);
    fecha5.setDate(29);
    fecha5.setFullYear(1999);
    fecha5.setHours(20);
    fecha5.setMinutes(20);
    fecha5.setSeconds(20);
    fecha5.setMilliseconds(501);
    console.log(fecha5);

    console.log(fecha.toDateString());
    console.log(fecha.toLocaleDateString());
    console.log(fecha.toGMTString());
    console.log(fecha.toUTCString());

}
//                                                                                                        ...   
//                                                                                         .@@@@@@@@@@+:@@@@@@@@
//                                                                                     =@@@@@@@@@@@@@@@=  *# :::
//                                                                                 .@@@                      .::
//                                                                      -  @.   #@@.   .                    ::::
//                                                      @ .     .. =@@@@@@@@@@@@.                        .::::::
//                                              ...   *@@@@@@@@@@@@@=        .          .           .   .:::::::
//                                         . *@@ =@@@   . .       .        .   .   ..     .              .::::::
//                                       @@@+                             .=.  @:              .  .  ::.::::::::
//                                  @@@@@=       . .    ..              +@*.*@@@@# . .   .  .        .::::::::::
//                      @@@@@@@@@@%:     .     .        ..          .:@@*@@@@@@@@.         .       :::..::::::::
//                 @@@@@%   @-=@.    ..                  @@   @# .@. -@@@@@@%.*@@   .          .   .:. :::::::::
//        @@   -@@@@::      :@@@  -@:@@               .@@@@.         . : @@@@:@@@          @  .   .  :::::::::::
//     .@@@@@@@@=:::::.::::. @@@@% @@@@#*@ .       @  @@@@@@@- @@@@@@@@@@@@@@@@@@   .    @@ .      :::::::::::::
// @@@#::::::::::::::::::::: .@@@@@@@@@@@@*       @@.@@@@@@@@@@@@+@@@@@@@@**@@@% @=   ..@@    :::::::::::::#=:::
// #::::::::::::::::+:*@#     @@@@@@@@@@@@@@     .@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@+ :=#@@@@@@@%@@@@@@@@@@@@@@@@@@
// ::::::::::::#@@@@@@@@+   .  @@@@@@@@@@@@@  %.@..@@@@@@@@@@@@@@@@@@@@@@@@@@@   #@.                           @
// :::::::*@@%::-#.#@@      .  @@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@. .                                  
// ::::::::::. .@@@@..@   .     @@@@@@@@@@@@*.   .  :   +@@@@@@    *@@@#.                                       
// :::::::: %*@@@@@  @@       .  @@@@@@@                                                                        
// =@@@@@@@@@+@@@@@@@@@@*@@@@@@@@@@@@@@                                                    PERSONA!             
// .   +-                 .  @@-.-                                                                              