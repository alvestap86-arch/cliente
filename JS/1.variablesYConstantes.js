"use strict"
{
    let a = "Hola";
    var b = "adios";
    saludar();
    
    function saludar() {
        console.log(a);
        console.log(b);
        let c = "no se ve fuera";
        var d = "tampoco se ve fuera";
    }
    {
        let e = "xxxx";
        var f = "yyy";
        console.log(b);
        console.log(a);
    }

    saludar ();
    //console.log(c);
    //console.log(d);
    //console.log(e);
    console.log(f);

    const g = 10;
    console.log(g);
    // g=g+1;
    // console.log(g);

    let h;
    let i=10;
    let s = 'esto es un string';


}