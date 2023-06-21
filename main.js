//Variables

let cuartosTotales = 50;
let cuartosOcupados = 0;

let terminarEjecucion = false;


//Funciones

function datoNombre () {
    let nombre;

    while (true) {
        nombre = prompt ("Ingresar nombre/s y apellido/s:");

        if (nombre !== "") {
            break;
        }
        alert("Este campo es obligatorio.");
    }  


    console.log("Nombre: " + nombre);
}

function datoTelefono () {
    let telefono;

    while (true) {
        telefono = parseInt(prompt ("Ingresar teléfono de contacto (SIN ESPACIOS):"));

        if (telefono !== "" && !isNaN(telefono)) {
            break;
        }
        alert("Número de teléfono no válido. Ingrese otro.");
    }  

    console.log("Número de teléfono: " + telefono);

}

function datoCorreo () {
    let mail;

    while (true) {
        mail = prompt ("Ingresar correo electrónico:");

        if (mail != "") {
            break;
        }
        alert("Este campo es obligatorio.");
    }

    console.log("Correo: " + mail);
    console.log("-------------------------------");
}

function huespedes() {
    let nroHuespedes;
  
    while (true) {
      nroHuespedes = parseInt(prompt("Ingrese la cantidad de huéspedes:"));

      if (!isNaN(nroHuespedes) && nroHuespedes > 0) {
        break; 
      }
  
      console.log("Error: Debe ingresar un valor numérico.");
    }
  
    console.log("El número de huéspedes deseados es " + nroHuespedes);
    console.log("-------------------------------");
}


function cuartosDisponibles (){
    let disponibilidad = cuartosTotales - cuartosOcupados ;
    console.log ("La cantidad de cuartos totales del hotel es " + cuartosTotales);   
    console.log ("La cantidad de cuartos ocupados del hotel es " + cuartosOcupados);
    console.log ("La cantidad de cuartos disponibles es " + disponibilidad) ;
    console.log ("-------------------------------");    

    
    if (disponibilidad <= 10) {
        console.log ("Quedan pocos cuartos disponibles!");
        console.log ("-------------------------------");    
    } else {
        console.log ("Aún hay lugares disponibles para elegir.");
        console.log ("-------------------------------");    
    }
}


function seleccionarMes(){
    console.log ("Los meses disponibles para reservar son:")
    console.log("7: Julio");
    console.log("8: Agosto");
    console.log("9: Septiembre");
    console.log("--------------------------");

    let op = prompt("Ingrese el número del mes en el que desea reservar:");

    switch(op){
        case "7": 
            console.log ("Usted quiere reservar en Julio.")
            huespedes();
            cuartosDisponibles ();
            break;
        case "8":
            console.log ("Usted quiere reservar en Agosto.")
            huespedes();
            cuartosDisponibles ();
            break;
        case "9":
            console.log ("Usted quiere reservar en Septiembre.")
            huespedes();
            cuartosDisponibles ();
            break;
        default: 
            terminarEjecucion = true;
    }
}

function pagar () {
    console.log("Las opciones de pago son:")
    console.log("Efectivo");
    console.log("Cheque");
    console.log("Tarjeta");
    console.log("Mercado Pago");
    console.log("--------------------------");
    console.log ("Si pagas con Efectivo o Mercado Pago, tenés un 10% de descuento.")
    console.log("--------------------------");


    const metodoPago = prompt("Cargar metodo de pago");

    switch(metodoPago.toLowerCase()) {
        case "efectivo":
            console.log("Pagas con efectivo. ¡Tenés un 10% de descuento!");
            break;
        case "cheque": 
            console.log("Pagas con cheque");
            break;
        case "tarjeta":
            console.log("Pagas con tarjeta");
            break;
        case "mercado pago": 
            console.log("Pagas con Mercado Pago. ¡Tenés un 10% de descuento!");
            break;
        default:
            console.log("No seleccionaste un metodo de pago valido");
    }
}

function menores () {
    while (cuartosOcupados < 30) {

        let menores = parseInt(prompt ("Ingrese el número de menores de 18 años que desean alojarse:"));

        if (isNaN(menores) || menores < 0 ) {
            console.log ("Error: Debe ingresar un número válido.");
          } else {
            if (menores > 3) {
                console.log ("El hotel se reserva el derecho de admisión de más de 3 menores de edad por habitación.");
                console.log ("-------------------------------");
                break;
            } else if (menores > 0) {
                console.log ("Hay disponibilidad de cuartos para menores.");
                console.log ("-------------------------------");
                pagar();
                break;
            } else {
                console.log ("Hay disponibilidad.");
                console.log ("-------------------------------");
                pagar();
                break;
            }
        }
    }
}



//Ejecución

console.log ("-------------------------------");
console.log ("Hotel Argentina");
console.log ("-------------------------------");
console.log ("Hacer una reserva");
console.log ("-------------------------------");


datoNombre();
datoTelefono();
datoCorreo();
console.log ("-------------------------------");


seleccionarMes ();

if (terminarEjecucion) {
    console.log("La ejecución ha sido interrumpida debido a que se ha seleccionado una opción no válida.");
    } else {

    if (cuartosOcupados >= 30) {
        let sinMenores = parseInt( prompt ("No tenemos disponibilidad de cuartos para menores. Si desea continuar haciendo una reserva ingrese ´1´"));

        if (sinMenores === 1){
            pagar();
            } else {
            console.log ("Gracias por visitar nuestra web! Cualquier consulta puede comunicarse al 0237 111 3333")
        }
    }

    menores();
}



