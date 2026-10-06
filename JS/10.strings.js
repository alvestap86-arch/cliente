"use strict"
{
    let s = "Hoy parece que llueve"
    console.log(s.toLowerCase());
    console.log(s);
    let s2 = new String (" y lo que sea")
    console.log(s.toUpperCase());
    console.log(s.concat(s2));
    console.log(s.indexOf("L",17));
    console.log(s.charAt(0));
    console.log(s.lastIndexOf("E"));
    console.log(s.lastIndexOf("e",15));
    console.log(s.replaceAll("l","H"));
    console.log(s);

    let datos = "Juan:Pedro:Bernal:47";
    let todosLostrozos = datos.split(":");
    console.table(todosLostrozos);
    console.log(todosLostrozos[4]);
    console.log(datos.length);
    console.log(todosLostrozos.length);

    console.log(datos.substring(5));
    console.log(datos.substring(5,15));

}