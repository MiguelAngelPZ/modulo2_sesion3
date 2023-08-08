//Declaración de variables

let valor = Number('');
let porcentaje = "";
let i = Number('');
let continuar= "";
let destino = "";
let lugar= "";
let comprar = Number('');
let dinero = Number('');

do{
    destino = menu();
    switch (destino) {
        case 1:
            texto1(destino);
            i = 400;
            console.log("Costo original de: $" + i + ".00");
            ahorro(i);
            break;
        case 2:
            texto1(destino);
            i = 1500;
            console.log("Costo original de: $" + i + ".00");
            ahorro(i);
            break;
        case 3:
            texto1(destino);
            i = 900;
            console.log("Costo original de: $" + i + ".00");
            ahorro(i);
            break;
        case 4:
            texto1(destino);
            i = 800;
            console.log("Costo original de: $" + i + ".00");
            ahorro(i);
            break;
        case 5:
            texto1(destino);
            i = 2500;
            console.log("Costo original de: $" + i + ".00");
            ahorro(i);
            break;
        default:
            console.log("Lo sentimos, esa opción no existe");
    }
    
    console.log("Costo total a pagar: $" + valor + ".00");
    
    comprar = prompt("¿Desea comprar su boleto (1 - Sí)?: ");
    if(comprar == 1){
        dinero = prompt("¿Con cuanto dinero desea pagar?: ");
        if(dinero < valor){
            console.log("No logramos procesar su pago, intente mas tarde");
        } else if(dinero == valor){
            console.log("Muchas gracias por su compra, su boleto lo recibirá en ventanilla");
        }else{
            console.log("Esta pagando con: $" + dinero + ".00");
            dinero = dinero - valor;
            console.log("Muchas gracias por su compra, recibirá en ventanilla la cantidad de " + dinero + ".00 y su boleto");
        }
    }else{
        console.log("Decidio no comprar su boleto");
    }

    continuar = prompt("¿Desea revisar otro destino (2 - No)?: ");
    
}while(continuar != "2")

console.log("Gracias por usar nuestro servicio");

function ahorro(i){
    let descuento = prompt("Tiene cupón de descuento (A, B, C o D), anotarlo: ");
    switch (descuento){
        case "A":                
            console.log("Con el cupón " + descuento + " tiene un 45% de descuento");
            valor = i - (i*.45);
            break;
        case "B":
            console.log("Con el cupón " + descuento + " tiene un 35% de descuento");
            valor = i - (i*.35);
            break;
        case "C":
            console.log("Con el cupón " + descuento + " tiene un 25% de descuento");
            valor = i - (i*.25);
            break;
        case "D":
            console.log("Con el cupón " + descuento + " tiene un 10% de descuento");
            valor = i - (i*.1);
            break;
        default:
            valor = i;
            console.log("Sin cupón de descuento");
            break;
        return valor;
    }
}

function texto1(destino){
    switch (destino) {
        case 1:
            console.log("Destino seleccionado: CDMX")
            break;
        case 2:
            console.log("Destino seleccionado: Chiapas")
            break;
        case 3:
            console.log("Destino seleccionado: Monterrey")
            break;
        case 4:
            console.log("Destino seleccionado: Sonora")
            break;
        case 5:
            console.log("Destino seleccionado: Guatemala")
            break;
        default:
            console.error("Lo sentimos, esa opción no existe");
    }
}

function menu(){
    destino = Number(prompt(`Actualmente contamos con los siguientes destinos:
        1) CDMX
        2) Chiapas
        3) Monterrey
        4) Sonora
        5) Guatemala
¿Cual es su destino?: `));
    return destino;
}