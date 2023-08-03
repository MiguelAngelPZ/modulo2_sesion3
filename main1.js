//Generar la funcionalidad de las 4 operaciones básicas, solo se puede operar con 2 números

const operaciones = `
  Operación a realizar:

  1) Suma
  2) Resta
  3) Multiplicación
  4) División

`;

let operacion = prompt(operaciones + "¿Cual operación selecciona?: ");
const num1 = Number(prompt("¿Dame el número 1? "));
const num2 = Number(prompt("¿Dame el número 2? "));

switch (operacion) {
    case "1":
        console.log("Resultado de la suma: ");
        suma(num1, num2)
        break;
    case "2":
        console.log("Resultado de la resta: ");
        resta(num1, num2)
        break;
    case "3":
        console.log("Resultado de la multiplicacion: ");
        multiplicacion(num1, num2)
        break;
    case "4":
        console.log("Resultado de la división: ");
        division(num1, num2)
        break;
    default:
        console.error("Numero no seleccionado");
}

function suma(num1, num2){
    console.log(num1 + num2);
}

function resta(num1, num2){
    console.log(num1 - num2);
}

function division(num1, num2){
    console.log(num1 / num2);
}

function multiplicacion(num1, num2){
    console.log(num1 * num2);
}

