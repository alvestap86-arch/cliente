"use strict"
{
    let animal = {
        tipo: "gato",
        patas: 4,
        bigotes: true,
        dimensiones: {
            alto: 40,
            ancho: 40,
            largo: 50
        },
        maullar (){
            console.log(`Soy un ${this.tipo} que hace miauuuu`)
        }
    }


    console.log(animal);
    animal.bigotes=false;
    console.log(animal);
    animal.dimensiones.largo=60;
    console.log(animal);
    animal.dimensiones["ancho"] = 30;
    console.log(animal);
    console.log(`El ${animal.tipo} mide ${animal.dimensiones.largo} cm de largo.`);
    animal.maullar();

    console.log(Object.keys (animal)); // array con las claves
    console.log(Object.values (animal)); // array con los valores

    //destructuring o desestructuración
    const {tipo, bigotes, dimensiones:{alto}} = animal; //asignación por copia
    console.log(tipo);
    console.log(bigotes);
    animal.tipo = "perro";
    console.log(tipo);

    const {alto: a, ancho, largo} = dimensiones;
    console.log(a);

    //unir 2 objetos literales
    const producto = {
        nombreProducto: "Reloj",
        tipo: "bolsillo",
        tamano: "grande"
    };
    const colores = {
        esfera: "blanco",
        correa: "negro"
    };
    const productoCompleto = {producto,colores};//por referencia pero no los une
    console.log(productoCompleto.producto.nombreProducto);
    producto.nombreProducto="anillo";
    console.log(productoCompleto.producto.nombreProducto);

    console.log(productoCompleto);

    const productoCompletoCopia = {...producto,...colores};//por copia pero si los une
    console.log(productoCompletoCopia);
}