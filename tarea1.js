//JOANA ROMAY - 4085670
const prompt = require("prompt-sync")();

/*Ejercicio 1: Clasificación de Número Entero
Pide al usuario que ingrese un número entero. Luego, muestra un mensaje indicando si el número
es:
"Positivo" si es mayor que cero.
"Negativo" si es menor que cero.
"Cero" si es igual a cero. 

let numeroEntero = parseInt(prompt("Ingrese un número: "));

if (numeroEntero > 0) {
    console.log("Positivo");
} else if (numeroEntero < 0) {
    console.log("Negativo");
} else if (numeroEntero === 0) { 
    console.log("Cero");
} else {
    console.log("No es un número");
}*/


/*Ejercicio 2: Determinar Tipo de Triángulo
Realiza un programa que solicite al usuario las longitudes de los tres lados de un triángulo (tres números).
Luego, muestra el tipo de triángulo que forman según las siguientes reglas:
Equilátero: si todos los lados son iguales.
Isósceles: si dos lados son iguales.
Escaleno: si todos los lados son diferentes. 

let lado1 = parseInt(prompt("Ingrese lado 1: "))
let lado2 = parseInt(prompt("Ingrese lado 2: "))
let lado3 = parseInt(prompt("Ingrese lado 3: "))

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Isósceles");
} else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
    console.log("Escaleno");
} else { 
    console.log("Ingrese un numero correcto");
}
*/

/*Ejercicio 3: Clasificacion de edad
Crea un programa que solicite al usuario su edad y determine en qué etapa de la vida se encuentra:
Menor de 12 es niño, entre 12 y 17 es adolescente, entre 18 y 64 es adulto, de 65 en adelante es adulto
mayor. 

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad < 12) {
    console.log("niño");
} else if (edad >= 12 && edad <= 17) {
    console.log("adolescente");
} else if (edad >= 18 && edad <= 64) {
    console.log("adulto");
} else if (edad >= 65) {
    console.log("adulto mayor");
} else { 
    console.log("ingrese una edad correcta");
}*/

/*Ejercicio 5: Calculo de notas
Pide al usuario que ingrese su calificacion (entre 0 y 100). Luego, mostrar su
equivalencia en letras segun la siguiente informacion:

90-100: A
80-89: B
70-79: C
60-69: D
Menos de 60: F 

let calificacion = parseInt(prompt("Ingrese una nota entre 0 y 100: "))

if (calificacion >= 90 && calificacion <= 100) {
    console.log("A");
} else if (calificacion >= 80 && calificacion <= 89) {
    console.log("B");
} else if (calificacion >= 70 && calificacion <= 79) {
    console.log("C");
} else if (calificacion >= 60 && calificacion <= 69) {
    console.log("D");
} else if (calificacion < 60) {
    console.log("F");
} else { 
    console.log("ingrese una nota correcta");
}
*/
/*Ejercicio 6: Número Mayor
Pedir al usuario que ingrese dos números y muestra cuál es el mayor. En caso de que
sean iguales, indícalo.
Luego intentar hacerlo con tres números (opcional para valientes). Tip: usar variable
auxiliar. 

let numero1 = parseInt(prompt("Ingrese el primer numero: "))
let numero2 = parseInt(prompt("Ingrese el segundo numero: "))

if (numero1 > numero2) {
    console.log(`${numero1} es mayor`);
} else if (numero2 > numero1) {
    console.log(`${numero2} es mayor`);

} else { 
    console.log("ambos numeros ingresados son iguales");
}*/