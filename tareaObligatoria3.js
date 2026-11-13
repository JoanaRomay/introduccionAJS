const prompt = require("prompt-sync")();
 //JOANA ROMAY. 40852670

/*TAREA

Crea un programa en JavaScript que implemente una calculadora como
un objeto. La calculadora debe ofrecer un menú para que el usuario
seleccione qué operación desea realizar. Los datos para las
operaciones se ingresarán desde la terminal (Node.js) o mediante
prompt (Navegador).

1 La calculadora debe ser un objeto con:
Propiedades para almacenar los números ingresados por el usuario.
Métodos para realizar las operaciones básicas:
sumar,
restar,
multiplicar,
dividir
potencia (al cuadrado)
raiz. (al cuadrado)
Un método para mostrar el menú y procesar la selección del usuario.
Requerimientos:

1. La calculadora debe ser un objeto con:
• Propiedades para almacenar los números ingresados por el usuario.
• Métodos para realizar las operaciones básicas:
    sumar,
    restar,
    multiplicar,
    dividir
    potencia (al cuadrado)
    raiz. (al cuadrado)
• Un método para mostrar el menú y procesar la selección del usuario.

2 . El programa debe mostrar un menú con las
siguientes opciones:

El usuario debe poder ingresar el número de la opción
elegida.

3 . Ingreso de Datos:
Después de seleccionar una operación, el usuario deberá ingresar dos
números (salvo para potencia y raiz).
Si la operación seleccionada es división, debe validarse que el segundo
número no sea 0.

4 . Salida del Programa:
Mostrar el resultado de la operación seleccionada.
Después de realizar una operación, debe volver a mostrar el menú hasta
que el usuario elija la opción "Salir".

Tip: Pueden usar readline o prompt-sync de nodeJs para
ingresar los datos por teclado. */


const calculadora = {
    numero1: 0,
    numero2: 0,

    sumar() {
        return this.numero1 + this.numero2;
    },
    restar() {
        return this.numero1 - this.numero2;
    },
    multiplicar() {
        return this.numero1 * this.numero2;
    },
    dividir() {
        return this.numero1 / this.numero2;
    },
    potencia() {
        return Math.pow(this.numero1, 2);
    },
    raiz() {
        return Math.sqrt(this.numero1);
    },

    iniciarMenu() {
        let numeroMenu;

        do {
            numeroMenu = parseInt(prompt(
                "\nCalculadora \n"+
                "1) SUMAR\n" +
                "2) RESTAR\n" +
                "3) MULTIPLICAR\n" +
                "4) DIVISIÓN\n" +
                "5) POTENCIA\n" +
                "6) RAÍZ CUADRADA\n" +
                "7) SALIR\n" +
                "Elija una operación matemática: "
            ));

            switch (numeroMenu) {
                case 1:
                    this.numero1 = parseFloat(prompt("Ingrese numero 1: "));
                    this.numero2 = parseFloat(prompt("Ingrese numero 2: "));
                    const resultadoSuma = this.sumar();
                    console.log(`El resultado de la suma es ${resultadoSuma}`);
                    break;

                case 2:
                    this.numero1 = parseFloat(prompt("Ingrese numero 1: "));
                    this.numero2 = parseFloat(prompt("Ingrese numero 2: "));
                    const resultadoResta = this.restar();
                    console.log(`El resultado de la resta es ${resultadoResta}`);
                    break;

                case 3:
                    this.numero1 = parseFloat(prompt("Ingrese numero 1: "));
                    this.numero2 = parseFloat(prompt("Ingrese numero 2: "));
                    const resultadoMultiplicacion = this.multiplicar();
                    console.log(`El resultado de la multiplicación es ${resultadoMultiplicacion}`);
                    break;

                case 4:
                    this.numero1 = parseFloat(prompt("Ingrese numero 1: "));
                    this.numero2 = parseFloat(prompt("Ingrese numero 2: "));

                    if (this.numero2 === 0) {
                        console.log("No se puede dividir por 0");
                    } else {
                        const resultadoDivision = this.dividir();
                        console.log(`El resultado de la división es ${resultadoDivision}`);
                    }
                    break;

                case 5:
                    this.numero1 = parseFloat(prompt("Ingrese numero 1: "));
                    const resultadoPotencia = this.potencia();
                    console.log(`El resultado de la potencia es ${resultadoPotencia}`);
                    break;

                case 6:
                    this.numero1 = parseFloat(prompt("Ingrese numero 1: "));
                    const resultadoRaizCuadrada = this.raiz();
                    console.log(`El resultado de la raíz cuadrada es ${resultadoRaizCuadrada}`);
                    break;

                case 7:
                    console.log("Saliendo...");
                    break;

                default:
                    console.log("Opción no válida");
                    break;
            }
        } while (numeroMenu !== 7);
    }
};

calculadora.iniciarMenu();