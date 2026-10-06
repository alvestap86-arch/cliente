//Indica si un NIF es válido o no
"use strict"
{
    const miFuncion = (nif) => {
        //un dni es valido cuando tiene exactamente 8 dígitos seguidos de 1 letra
        const coincidencia = /^(\d{8})([A-Z])$/i.exec(nif.trim());

        if (!coincidencia) return false;
    };

    console.log(miFuncion("12345678Z"));
    console.log(miFuncion("12345678A"));
}