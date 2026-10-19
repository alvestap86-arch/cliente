/*
^ --> Inicio del texto.
$ --> Final del texto.
. --> Cualquier carácter excepto ciertos saltos de línea.
\d --> Un dígito del 0 al 9.
\D --> Cualquier carácter que no sea un dígito.
\w --> Carácter de palabra (letras inglesas, números o guion bajo).
\W --> Carácter que no sea de palabra.
\s --> Espacio en blanco (espacio, tabulación o salto de línea).
\S --> Carácter que no sea un espacio en blanco.
[abc] --> Cualquiera de los caracteres indicados.
[a-z] --> Cualquier letra minúscula inglesa de la a a la z.
[A-Z] --> Cualquier letra mayúscula inglesa de la A a la Z.
[0-9] --> Cualquier dígito del 0 al 9.
[^abc] --> Cualquier carácter excepto los indicados.
* --> Cero o más repeticiones del elemento anterior.
+ --> Una o más repeticiones del elemento anterior.
? --> Cero o una repetición del elemento anterior.
{n} --> Exactamente n repeticiones del elemento anterior.
{n,m} --> Entre n y m repeticiones del elemento anterior.
{n,} --> Como mínimo n repeticiones del elemento anterior.
(...) --> Grupo de captura.
(?:...) --> Grupo sin captura.
a|b --> Alternativa: coincide con a o con b.
\1 --> Referencia al primer grupo capturado.
\b --> Límite de palabra.
(?=...) --> Comprueba que lo siguiente cumple el patrón.
(?!...) --> Comprueba que lo siguiente NO cumple el patrón.
(?<=...) --> Comprueba que lo anterior cumple el patrón.
(?<!...) --> Comprueba que lo anterior NO cumple el patrón.
i --> Ignora mayúsculas y minúsculas.
g --> Busca todas las coincidencias.
m --> ^ y $ funcionan también al principio y final de cada línea.
s --> Permite que el punto (.) coincida con saltos de línea.
*/
/*
EJEMPLOS DE EXPRESIONES REGULARES COMPLEJAS DESGLOSADAS

1. NIF: 8 números seguidos de una letra.
   /^(\d{8})([A-Z])$/i
   ^         --> Inicio del texto.
   (\d{8})   --> Grupo 1: exactamente 8 dígitos.
   ([A-Z])   --> Grupo 2: una letra de la A a la Z.
   $         --> Final del texto.
   i         --> Ignora mayúsculas y minúsculas.
   Ejemplo válido: 12345678Z


2. Código con dos letras, guion y tres números.
   /^[A-Z]{2}-\d{3}$/
   ^         --> Inicio del texto.
   [A-Z]{2}  --> Exactamente 2 letras mayúsculas.
   -         --> Un guion literal.
   \d{3}     --> Exactamente 3 dígitos.
   $         --> Final del texto.
   Ejemplo válido: AB-123


3. Número decimal positivo o negativo.
   /^-?\d+(\.\d+)?$/
   ^         --> Inicio del texto.
   -?        --> Signo negativo opcional.
   \d+       --> Uno o más dígitos.
   (\.\d+)?  --> Parte decimal opcional: punto y uno o más dígitos.
   $         --> Final del texto.
   Ejemplos válidos: 25, -10, 3.14, -2.5


4. Contraseña con al menos 8 caracteres, una mayúscula y un número.
   /^(?=.*[A-Z])(?=.*\d).{8,}$/
   ^         --> Inicio del texto.
   (?=.*[A-Z]) --> Exige al menos una mayúscula en cualquier posición.
   (?=.*\d)  --> Exige al menos un dígito en cualquier posición.
   .{8,}     --> Al menos 8 caracteres.
   $         --> Final del texto.
   Ejemplo válido: HolaMundo7
   Nota: no exige símbolos especiales ni minúsculas.


5. Correo electrónico con formato básico.
   /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   ^         --> Inicio del texto.
   [^\s@]+   --> Uno o más caracteres que no sean espacios ni @.
   @         --> Un símbolo @ literal.
   [^\s@]+   --> Uno o más caracteres que no sean espacios ni @.
   \.        --> Un punto literal.
   [^\s@]+   --> Uno o más caracteres que no sean espacios ni @.
   $         --> Final del texto.
   Ejemplo válido: usuario@dominio.com
   Nota: comprueba un formato básico, no la existencia del correo.


6. Fecha con formato DD/MM/AAAA.
   /^\d{2}\/\d{2}\/\d{4}$/
   ^         --> Inicio del texto.
   \d{2}     --> Dos dígitos para el día.
   \/        --> Una barra / literal.
   \d{2}     --> Dos dígitos para el mes.
   \/        --> Una barra / literal.
   \d{4}     --> Cuatro dígitos para el año.
   $         --> Final del texto.
   Ejemplo válido: 19/10/2026
   Nota: comprueba el formato, no que la fecha exista.


7. Buscar palabras repetidas consecutivamente.
   /\b(\w+)\s+\1\b/i
   \b        --> Límite de palabra.
   (\w+)     --> Grupo 1: una o más letras, números o guiones bajos.
   \s+       --> Uno o más espacios en blanco.
   \1        --> Repite exactamente el texto capturado en el grupo 1.
   \b        --> Límite de palabra.
   i         --> Ignora mayúsculas y minúsculas.
   Ejemplo válido: hola hola


8. Extraer una etiqueta HTML sencilla.
   /<([a-z]+)>.*?<\/\1>/i
   <         --> Símbolo < literal.
   ([a-z]+)  --> Grupo 1: nombre de la etiqueta.
   >         --> Símbolo > literal.
   .*?       --> Cualquier contenido, con la menor coincidencia posible.
   <\/       --> Busca literalmente </.
   \1        --> El mismo nombre de etiqueta capturado en el grupo 1.
   >         --> Cierre de la etiqueta.
   i         --> Ignora mayúsculas y minúsculas.
   Ejemplo válido: <b>Hola</b>
   Nota: no sirve para analizar HTML complejo de forma fiable.


9. Texto que contiene una palabra, pero no otra inmediatamente después.
   /gato(?!\s*negro)/i
   gato      --> Busca la palabra "gato" como texto.
   (?!...)   --> Comprueba que lo siguiente NO coincida con el patrón.
   \s*       --> Cero o más espacios.
   negro     --> Texto "negro".
   i         --> Ignora mayúsculas y minúsculas.
   Coincide con: gato blanco
   No coincide con: gato negro


10. Extraer números precedidos por el símbolo €.
    /(?<=€)\d+(?:[.,]\d{2})?/
    (?<=€)    --> Exige que antes haya un símbolo €.
    \d+       --> Uno o más dígitos.
    (?:...)   --> Grupo sin captura.
    [.,]      --> Una coma o un punto.
    \d{2}     --> Exactamente dos dígitos decimales.
    ?         --> Hace opcional toda la parte decimal.
    Ejemplos encontrados: 25 en "€25"; 12,50 en "€12,50".
*/

"use strict";

// ==================================================
// 1. VALIDAR UN NIF (8 números y una letra)
// ==================================================

let validarNIF = (nif) => {
    // ^          --> Inicio del texto
    // (\d{8})    --> Grupo 1: exactamente 8 dígitos
    // ([A-Z])    --> Grupo 2: una letra
    // $          --> Final del texto
    // i          --> Ignora mayúsculas y minúsculas

    const coincidencia = /^(\d{8})([A-Z])$/i.exec(nif.trim());

    if (coincidencia !== null) {
        console.log("Formato correcto");
        console.log("Números:", coincidencia[1]);
        console.log("Letra:", coincidencia[2]);
    } else {
        console.log("Formato incorrecto");
    }
};

validarNIF("12345678Z");


// ==================================================
// 2. VALIDAR UNA CONTRASEÑA
// Al menos 8 caracteres, una mayúscula y un número
// ==================================================

let validarContrasena = (contrasena) => {
    // ^              --> Inicio del texto
    // (?=.*[A-Z])    --> Exige al menos una mayúscula
    // (?=.*\d)       --> Exige al menos un dígito
    // .{8,}          --> Exige al menos 8 caracteres
    // $              --> Final del texto

    const patron = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    return patron.test(contrasena);
};

console.log(validarContrasena("HolaMundo7")); // true
console.log(validarContrasena("holamundo"));  // false


// ==================================================
// 3. EXTRAER NÚMEROS DE UN TEXTO
// ==================================================

let extraerNumeros = (texto) => {
    // \d+ --> Uno o más dígitos consecutivos
    // g   --> Busca todas las coincidencias

    return texto.match(/\d+/g);
};

console.log(extraerNumeros("Tengo 3 coches y 25 motos"));
// Resultado: ["3", "25"]


// ==================================================
// 4. VALIDAR UNA FECHA CON FORMATO DD/MM/AAAA
// ==================================================

let validarFecha = (fecha) => {
    // ^        --> Inicio del texto
    // \d{2}    --> Dos dígitos
    // \/       --> Una barra / literal
    // \d{2}    --> Dos dígitos
    // \/       --> Otra barra
    // \d{4}    --> Cuatro dígitos
    // $        --> Final del texto

    const patron = /^\d{2}\/\d{2}\/\d{4}$/;

    return patron.test(fecha);
};

console.log(validarFecha("19/10/2026")); // true
console.log(validarFecha("1/10/2026"));  // false
// Nota: solo comprueba el formato, no que la fecha exista.


// ==================================================
// 5. BUSCAR PALABRAS REPETIDAS
// ==================================================

let buscarRepetidas = (texto) => {
    // \b       --> Límite de palabra
    // (\w+)    --> Grupo 1: captura una palabra
    // \s+      --> Uno o más espacios
    // \1       --> Exige repetir la palabra capturada
    // \b       --> Límite final de palabra
    // i        --> Ignora mayúsculas y minúsculas

    const patron = /\b(\w+)\s+\1\b/i;

    return patron.test(texto);
};

console.log(buscarRepetidas("hola hola")); // true
console.log(buscarRepetidas("hola adiós")); // false


// ==================================================
// 6. SUSTITUIR ESPACIOS REPETIDOS POR UNO SOLO
// ==================================================

let limpiarTexto = (texto) => {
    // \s+ --> Uno o más espacios en blanco consecutivos
    // g   --> Sustituye todas las coincidencias

    return texto.replace(/\s+/g, " ").trim();
};

console.log(limpiarTexto("Hola     mundo   JavaScript"));
// Resultado: "Hola mundo JavaScript"


// ==================================================
// 7. VALIDAR UN CÓDIGO: DOS LETRAS, GUION Y TRES NÚMEROS
// ==================================================

let validarCodigo = (codigo) => {
    // ^         --> Inicio
    // [A-Z]{2}  --> Dos letras mayúsculas
    // -         --> Un guion literal
    // \d{3}     --> Tres dígitos
    // $         --> Final

    const patron = /^[A-Z]{2}-\d{3}$/;

    return patron.test(codigo);
};

console.log(validarCodigo("AB-123")); // true
console.log(validarCodigo("A-123"));  // false


// ==================================================
// 8. EXTRAER EL PRECIO DE UN TEXTO
// ==================================================

let extraerPrecio = (texto) => {
    // €          --> Busca el símbolo del euro
    // \s*        --> Cero o más espacios
    // \d+        --> Uno o más dígitos
    // (?:...)    --> Grupo sin captura
    // [,.]       --> Una coma o un punto
    // \d{2}      --> Dos decimales
    // ?          --> Hace opcional la parte decimal
    // g          --> Busca todas las coincidencias

    const patron = /€\s*\d+(?:[,.]\d{2})?/g;

    return texto.match(patron);
};

console.log(extraerPrecio("Coste: 25 €, oferta: €12,50"));
// Resultado: ["25 €", "€12,50"]

/*
============================================================
MÉTODOS PARA TRABAJAR CON EXPRESIONES REGULARES EN JAVASCRIPT
============================================================

1. test(texto)
   --> Comprueba si existe alguna coincidencia con la expresión
       regular. Devuelve true o false.

   Sintaxis:
       patron.test(texto);

   Ejemplo:
       const patron = /\d{3}/;

       patron.test("ABC123"); // true
       patron.test("ABC12");  // false

   IMPORTANTE:
   - Devuelve un booleano: true o false.
   - No devuelve el texto encontrado ni los grupos.
   - Con la bandera g o y, puede modificar lastIndex,
     afectando a llamadas sucesivas.


2. exec(texto)
   --> Busca una coincidencia y devuelve un array con el
       resultado y los grupos capturados. Si no encuentra
       ninguna coincidencia, devuelve null.

   Sintaxis:
       patron.exec(texto);

   Ejemplo:
       const patron = /(\d{3})-([A-Z])/;
       const resultado = patron.exec("Código: 123-A");

       // resultado[0] --> "123-A" (coincidencia completa)
       // resultado[1] --> "123"   (grupo 1)
       // resultado[2] --> "A"     (grupo 2)
       // resultado.index --> 8    (posición inicial)
       // resultado.input --> "Código: 123-A" (texto original)

   IMPORTANTE:
   - Devuelve un array si encuentra una coincidencia.
   - Devuelve null si no encuentra ninguna.
   - Los grupos entre paréntesis se pueden recuperar
     mediante sus índices, empezando por 1.
   - Los grupos con nombre se pueden consultar con
     resultado.groups.nombre.
   - Con la bandera g o y, puede modificar lastIndex.
   - Sin g ni y, busca desde el principio del texto.


3. match(texto)
   --> Es un método de las cadenas de texto. Busca coincidencias
       utilizando una expresión regular.

   Sintaxis:
       texto.match(patron);

   CASO A: SIN LA BANDERA g
       const resultado = "ABC123".match(/([A-Z]+)(\d+)/);

       // resultado[0] --> "ABC123" (coincidencia completa)
       // resultado[1] --> "ABC"    (grupo 1)
       // resultado[2] --> "123"    (grupo 2)
       // resultado.index --> 0
       // Devuelve null si no encuentra coincidencias.

   CASO B: CON LA BANDERA g
       const resultado = "A12 B34 C56".match(/\d+/g);

       // resultado --> ["12", "34", "56"]

       // Devuelve todas las coincidencias completas,
       // pero no incluye los grupos capturados.

   IMPORTANTE:
   - Sin g, devuelve la primera coincidencia y sus grupos.
   - Con g, devuelve todas las coincidencias completas.
   - Con g, no devuelve los grupos capturados.
   - Devuelve null si no encuentra coincidencias.


============================================================
RESUMEN DE LAS DIFERENCIAS
============================================================

test()  --> Devuelve true o false.
exec()  --> Devuelve la coincidencia y sus grupos, o null.
match() --> Devuelve coincidencias en forma de array, o null.

EJEMPLO COMPARATIVO:

const patron = /(\d+)-([A-Z])/;
const texto = "Código: 123-A";

patron.test(texto);
// true

patron.exec(texto);
// ["123-A", "123", "A", ...]

texto.match(patron);
// ["123-A", "123", "A", ...]

REGLA PARA RECORDAR:

- ¿Solo quiero comprobar si cumple el patrón? --> test()
- ¿Quiero extraer grupos concretos?           --> exec()
- ¿Quiero obtener coincidencias de un texto?   --> match()

NOTA:
match() se llama sobre el texto; test() y exec() se llaman
sobre la expresión regular.
*/