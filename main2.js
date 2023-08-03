//Funión que debes de color tu nombre y opcionalmente tu edad

function saludo(nombre, edad) {
    if (edad === undefined) {
        alert(`Buenos días ${nombre} no diste tu edad`)
    } else {
        alert(`Buenos días ${nombre}, tu edad es de ${edad} años` )
    }
}

//Consola -> saludo("Miguel")
//Consola -> saludo("Miguel","38")