"use strict"
{
    const r1=/.a.o/;
    //DATO dato dAto daTO
    const r2 = new RegExp(".a.o","i");
    const r3 = new RegExp(".a.o","i");

    console.log(r1.test("GATO"));
    console.log(r1.test("PatO"));
    console.log(r1.test("Perro"));

    const r4 = new RegExp ("^fútbol"); // ^ => al principio
    console.log(r4.test("no me gusta el fútbol")); //false
    console.log(r4.test("fútbol sale"));
    console.log("Sevilla\nfútbol club");
    console.log(r4.test("Sevilla\nfútbol club"));

    const r5 =/./;
    console.log(r5.test("x"));//true
    console.log(r5.test("abc"));//true
    console.log(r5.test(""));//true

    let s = "table footballfootbolin";
    const r6 = /foo/y;
    console.log(r6.lastIndex);
    console.log(r6.test(s));
    console.log(r6.lastIndex);
    
    const r7 = /\.a.o/i;
    console.log(r7.test(".ATO"));
    console.log(/\.a.o/i.test(".aTO"));

    console.log(/A./.test("A."));
    console.log(/A./.test("Ab"));

    // \s --> un espacio
    // [] --> Cualquiera de los caracteres del interior
    // [^] --> no existen los caracteres del interior del corchete
    // | --> alternativa: lo que está a la izquierda o lo que está a la derecha

    let r8 = /[^aeiou]$/i;
    console.log(r8.test("BI")); //
    let r9 = /[^aeiou]|.$/i;
    console.log(r9.test("xxxxx"));
    let r10 = /[^ca|ma]/i;
    console.log(r10.test("mapas"));
    /*
        [0-9] = \d
        [^0-9] = \D
        [A-Z] (ni Ñ ni tildes)
        [a-z]
        [A-Za-z0-9] = \w (la 'w' incluye el guión bajo '_')
        [^A-Za-z0-9] = \W (la 'W' verifica que no incluya tampoco '_')
        [\t\r\n] = \s
        [^ \t\r\n] = \S
    */

    const r11 = /[A-Za-z0-9]/;
    console.log(r11.test("Xx7ñ"));
    /*
        \b = texto con espacios o simbolos de puntuación, o al principio
    */

    const r12 = /fo\b/i;
    console.log(r12.test("Esto es un párrafos"));
    const r13 = /\bfo/i;
    console.log(r13.test("Esto es un párra fos"));
    /*
       \B = lo contrario a \b
    */
    
    /*
       * --> 0 o más ocurrencias
        + --> 1 o más ocurrencias
    */

    const r14 = /a*/;
    r14.test(""); // true
    r14.test("a"); //true
    r14.test("aa"); // true
    r14.test("aba"); // true
    r14.test("bbb"); // true

    const r15 = /a+/;
    r15.test(""); // false
    r15.test("a"); // true
    r15.test("aa"); // true
    r15.test("aba"); // true
    r15.test("bbb"); // false

    const r16 =/disparos?/;
    r16.test ("escuché disparos en la habitación"); // true
    r16.test ("efectuó un disparo al aire"); // true

    /*
        {n} --> se repite n veces
        {n,} --> se repite n o más veces
        {n,m} --> se repite entre n y m veces
    */

    const r17 = /[0-9]{2,}/;
    r17.test(42); //true
    r17.test(88); //true
    r17.test(1);  //false
    r17.test(125);//true

    const r18 = /^[0-9]{2}$/;
    r18.test (4); //false
    r18.test (55); //true
    console.log(r18.test (125)); //false

    const r19 = /^[0-9]{3,}$/;
    r19.test(33); //false
    r19.test(345); // true
    r19.test(3450); //trueç

    const r20 = /^[0-9]{2,5}$/;
    r20.test(2); //false
    r20.test (444); //true
    console.log(r20.test(54321)); //false

    const r21 = /^\d{2}$/;
    console.log(r21.test("aabb"));

    const r22 = /^\w{3}$/;
    console.log(r22.test(r22.test("aB7*")));

    const r23 = /\b[a-z]{2}\b/i;
    let st = "la ola del mar es azul y tenía más sal que el salero";
    console.log(r23.lastIndex);
    console.log(r23.exec (st));
    console.log(r23.lastIndex);
    console.log(r23.exec(st));
    console.log(r23.lastIndex);
    console.log(r23.exec(st));
    console.log(r23.lastIndex);
    console.log(r23.exec (st));
    console.log(r23.lastIndex);
    console.log(r23.exec (st));
    console.log(r23.lastIndex);
    console.log(r23.exec (st));
    console.log(r23.lastIndex);

    let x = t.match(r23).length;
    console.log(x);
}