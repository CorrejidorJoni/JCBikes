





 function menuPrincipal() {
         let total = 0;
         let menu;
         do {
             menu = prompt("¡Bienvenido a JCBikes! \n Por favor, indique el tipo de operacion\n 1-Comprar Nueva\n 2-Comprar Usado\n 3-Carrito de compras ");
             menu = parseInt (menu);
             switch (menu) {
                case 1:
                     total = total + comprarBici();
                     break;
                case 2:
                    total = total + comprarUsado();
                     break;
                case 3: 
                 alert ("El total acumulado es " + total);
                     break;
                default:
                 alert ("La opción ingresa no es válida.");
             }
         } while (menu != 4);
     }


function comprarBici () {
    let acumulador = 0;
    alert("Por favor, seleccione el modelo que desea adquirir")
    alert("1-Specialized Epic Pro\n2-Specialized Tarmac\n3-Specialized Diverge")
    let tipo = prompt("Ingreselo aqui")
    tipo = parseInt (tipo)
    switch (tipo) {
        case 1: acumulador = acumulador + 1200000
        break
        case 2: acumulador = acumulador + 950000
        break
        case 3: acumulador = acumulador + 1100000
        break
        default: alert ("opcion invalida")
    }
    return acumulador
}


function comprarUsado () {
    let acumulador = 0;
    alert ("por favor, seleccione el modelo que desea adquirir")
    alert ("1-Zenith Astra\n2-Mondraker Chrono RR")
    let tipo = prompt("Ingreselo aqui")
    tipo = parseInt (tipo)
    switch (tipo) {
        case 1: acumulador = acumulador + 190000
            break
        case 2: acumulador = acumulador + 650000
            break
        default:
            alert ("opcion invalida")
    }
    return acumulador
}

menuPrincipal ()


 