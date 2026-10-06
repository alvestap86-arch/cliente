"use strict"
{
    let myNumbers = [100,5,15,1,99];
    myNumbers.sort();
    console.log(myNumbers);

    myNumbers = [100,5,15,1,99];
    myNumbers.sort( (a,b) => {
        if(a<b) {
            return -1;
        }
        if (a>b) {
            return 1;
        }
        if (a===b) {
            return 0;
        }
    })
    console.log(myNumbers);

    myNumbers = [100,5,15,1,99];
    myNumbers.sort ((a,b) => a<b?-1:1);

    myNumbers = [100,5,15,1,99];
    myNumbers.sort ((a,b) => a-b);

    //Ordenar array de mayor a menor
    myNumbers = [100,5,15,1,99];
    myNumbers.sort();
    console.log(myNumbers);

    myNumbers = [100,5,15,1,99];
    myNumbers.sort( (a,b) => {
        if(a<b) {
            return 1;
        }
        if (a>b) {
            return -1;
        }
        if (a===b) {
            return 0;
        }
    })

    myNumbers = [100,5,15,1,99];
    myNumbers.sort ((a,b) => a<b?1:-1);
    console.log(myNumbers);

    myNumbers = [100,5,15,1,99];
    myNumbers.sort ((a,b) => b-a);
    console.log(myNumbers);

    //ORDENAR ARRAY DE STRING

    let myNames = ["Leti", "Sandra", "Maria", "María", "Candela"];
    myNames.sort();
    console.log(myNames);

    //Alfabéticamente (A-Z)
    myNames.sort((a,b) => a.localeCompare(b));
    console.log(myNames);

    //(Z-A)
    myNames = ["L", "S", "M", "M", "C"];
    myNames.sort.reverse;

}