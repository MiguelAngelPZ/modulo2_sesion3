const destinos = `
  Actualmente contamos con los siguientes destinos:

  1) CDMX
  2) Chiapas
  3) Monterrey
  4) Sonora
  5) Guatemala

`;

const valor = Number('');
let porcentaje = "";
i = valor;
let continuar= "";

do{
    let destino = prompt(destinos + "¿Cual es su destino?: ");
    let descuento = prompt("Tiene cupón de descuento (A, B, C o D), anotarlo: ");
    console.log("Destino seleccionado: " + destino);
    switch (destino) {
        case "1":
            //function texto1(CDMX)
            i = 400;
            console.log("Costo original de: $" + i + ".00");
            break;
        case "2":
            i = 1500;
            console.log("Costo original de: $" + i + ".00");
            break;
        case "3":
            i = 900;
            console.log("Costo original de: $" + i + ".00");
            break;
        case "4":
            i = 800;
            console.log("Costo original de: $" + i + ".00");
            break;
        case "5":
            i = 2500;
            console.log("Costo original de: $" + i + ".00");
            break;
        default:
            console.error("Lo sentimos, esa opción no existe");
    }

    switch (descuento){
        case "A":                
            console.log("Con el cupón " + descuento + " tiene un 45% de descuento");
            i = i - (i*.45);
            break;
        case "B":
            console.log("Con el cupón " + descuento + " tiene un 35% de descuento");
            i = i - (i*.35);
            break;
        case "C":
            console.log("Con el cupón " + descuento + " tiene un 25% de descuento");
            i = i - (i*.25);
            break;
        case "D":
            console.log("Con el cupón " + descuento + " tiene un 10% de descuento");
            i = i - (i*.1);
            break;
        default:
            console.log("Sin cupón de descuento");
            break;
    }
    console.log("Costo total a pagar: $" + i + ".00");
    continuar = prompt("¿Desea revisar otro destino ( 2 - No)?: ");
}while(continuar != "2")

console.log("Gracias por usar nuestro servicio");

function texto1(lugar){
    console.log(`Destino seleccionado: ${lugar}`);
}