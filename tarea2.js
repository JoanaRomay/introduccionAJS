//JOANA ROMAY. DNI 40852670
//const prompt = require("prompt-sync")();

/*EJERCICIO 1: Dado el arreglo de frutas que contienen "manzana","banana","pera","naranja", recorrerlo con un bucle e imprimir por consola el índice y el valor de cada elemento.

const frutas = ["manzana", "banana", "pera"];

for (let i = 0; i < frutas.length; i++) {

    console.log(`indice: ${i}, fruta: ${frutas [i]}` );
}*/

/*EJERCICIO 2: Con el arreglo anterior, realizar las siguientes operaciones:
1. Agregar "kiwi" al final.
2. Agregar "sandía" al inicio.
3. Quitar el primer elemento.
4. Quitar el último elemento. Imprime el arreglo final


const frutas = ["manzana", "banana", "pera"];

frutas.push("kiwi");
console.log(frutas);

frutas.unshift("sandía");
console.log(frutas);

frutas.shift()
console.log(frutas);

frutas.pop();
console.log(frutas);

console.log(frutas);
*/

/*EJERCICIO 3: Dado el arreglo de números = [ 10, 20, 30, 40, 50 ], el
programa debe recibir un número e indicar si está en el
arreglo. 

let numeroRecibido = parseInt(prompt("Ingrese un número: "));
const numeros = [ 10, 20, 30, 40, 50 ];
let numeroEncontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeroRecibido === numeros[i]) { 
        numeroEncontrado = true;
        console.log("El número ingresado ESTÁ en el array");
    } 
}
    if (numeroEncontrado === false) {
        console.log("El número ingresado NO ESTÁ dentro del array");
    }*/

/*EJERCICIO 4:  Dado un arreglo de números como [1, 2, 3, 2, 4, 2, 5],
contar la cantidad de veces que se repite el valor 2 y
mostrarlo en consola.

const numeros = [1, 2, 3, 2, 4, 2, 5];

let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i]);
    
    if (numeros[i] === 2) {
        contador = contador + 1;
    }
   
}
console.log(`El número 2 se repite ${contador} veces`);*/

/*EJERCICIO 5: Recorrer el arreglo [5, 12, 8, 20, 3, 15] con un bucle y guardar en un nuevo arreglo solo los números mayores a 10 


const numeros = [5, 12, 8, 20, 3, 15];
const nuevoArreglo = [];

for (const numero of numeros) {
    //console.log(numero);
    if (numero > 10) {
        nuevoArreglo.push(numero)
        
    }
}
console.log(nuevoArreglo);*/

/*EJERCICIO 6: Dado un arreglo de nombres, recorrerlo en orden inverso con un bucle for tradicional y guardar los elementos en un nuevo arreglo 

const nombres = ["Maria", "Juan", "Ana", "Pedro"];
const nombresInversos = [];

for (let i = nombres.length - 1; i >= 0; i--) {
  //  console.log(nombres[i]);
    nombresInversos.push(nombres[i]);
}

console.log(nombresInversos);*/

/*EJERCICIO 7: Dado un arreglo de precios de productos calcular el gasto total y el precio promedio de la compra utilizando un for... of y un acumulador 

const preciosCompra = [1250.50, 4300.00, 850.25, 6200.00, 3100.75, 950.00];

let gastoTotal = 0;

for (const precio of preciosCompra) {
    gastoTotal = gastoTotal + precio;

}

let promedio = gastoTotal / preciosCompra.length;

console.log(`El gasto total de la compra es $${gastoTotal} y el promedio de la compra es $${promedio}` );*/

/*EJERCICIO 8: Dada una matriz de números enteros de 3x3, recorrerla utilizando bucles anidados para obtener la suma de absolutamente todos sus elementos 
const numeros = [
    [2, 65, -55],
    [1000, 0 , 88],
    [-13, 89, 67]
]

let suma = 0; 

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros[i].length; j++) {
        suma = suma + numeros[i][j]
    
    }    
}

console.log(`La suma total es ${suma}` ); */

/*EJERCICIO 9: Dado un mapa de 3x3 que representa un tablero de juego con casilleros vacios ("~") y uno barco ("B"), encontrar e imprimir en que fila y columna se encuentra el barco 

const oceano = [
    ["~", "~","~"],
    ["~", "B", "~"],
    ["~", "~", "~"]
]



for (let i = 0; i < oceano.length; i++) {
    for (let j = 0; j < oceano[i].length; j++) {
        if ("B" === oceano[i][j]) {
            console.log(`${oceano[i][j]} está en fila ${i} y columna ${j}` );
        }
    }    
}*/
