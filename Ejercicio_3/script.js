/*3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”]
y muestre en consola solo los elementos que son tipo número. */

const arreglo = [4,"dos",8,"tres",5,9,1,"cero"];

for (let elem = 0; elem < arreglo.length; elem++){
    if (typeof arreglo[elem] === "number"){
        console.log(arreglo[elem]);
    }
}