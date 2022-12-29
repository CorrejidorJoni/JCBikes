


// let option = prompt ("¡¡BIENVENIDO/A A SU PROXIMO PRESTAMO!! \n¿Desea continuar? \n1 - Sí, deseo continuar. \n2 - No, no deseo continuar.")
// option = parseInt (option)




// // if (opcion == 1) {
// //     prompt ("¡Excelente! \n\nPor favor, ingrese el monto deseado.")
// // } 
// // else 
// // {
// //     if (opcion == 2) {
// //         alert ("Muchas gracias, hasta luego.")
// //     } 
// //     else {
// //         alert ("Su opción es inválida")
// //     }
// // }

// switch (option)
// {
//     case 1: 
//         prompt ("¡Excelente! \nPor favor, ingrese el monto deseado.")
//         break
//     case 2:
//         alert ("Muchas gracias, hasta luego.")
//         break
//     default: 
//         alert ("Su opción es inválida")
// }
 
// let cuotas = prompt ("¿En cuantas cuotas desea abonar?")
// cuotas = parseInt (cuotas)

// const IVA = 21%

// suma 


// let option = prompt ("¡¡BIENVENIDO/A A SU PROXIMO PRESTAMO!! \n¿Desea continuar? \n1 - Sí, deseo continuar. \n2 - No, no deseo continuar.")
// option = parseInt (option)

// switch (option)
// {
//      case 1: 
//          prompt ("¡Excelente! \nPor favor, ingrese el monto deseado.")
//          break
//      case 2:
//          alert ("Muchas gracias, hasta luego.")
//          break
//      default: 
//          alert ("Su opción es inválida")
// }

// function sumaPrestamo(valor1,valor2)
// {
//     let resultado 
//     resultado = valor1 + valor2 
//     return resultado
// }

// let a = prompt = ("Ingrese el monto que desea solicitar")
// let b = prompt = ("En cuantas cuotas desea abonar")
// let total


// a = parseFloat (a)
// b = parseFloat (b)


// total = sumaPrestamo (a,b)

// alert(total)

// function menuPrincipal() {
//     let total = 0;
//     let menu;
//     do {
//         menu = prompt ("1-comprar\n 2-Alquilar \n 3- Cerrar-cuenta \n 4-Salir ");
//         menu = parseInt(menu);
//         switch (menu) {
//             case 1:
//                 total = total + comprarProtesis();
//                 break;
//             case 2:
//                 total = total + alquilerProtesis();
//                 break;
//             case 3: 
//             alert ("el total acumulado " + total);
//             total = 0;
//             break;
//         case 4: 
//             alert ("saliendo");
//             break;
//             default:
//             alert ("opcion invalida");
//         }
//     } while (menu != 4);
// }

// function comprarProtesis () {
//     let acumulador = 0;
//     alert ("seleccione las opciones para obtener su presupuesto")
//     alert ("1-bota\n 2-baston \n 3-muleta ")
//     let tipo = prompt ("ingrese tipo de protesis que desea adquirir")
//     tipo = parseInt (tipo)


//     switch (tipo) {
//         case 1: 35000
//             break
//         case 2 : 32000
//             break
//         case 3: 10000
//             break
//         default: alert ("opcion invalida")

//     }
//     return acumulador
// }


// function alquilerProtesis () {
//     let acumulador = 0
//     alert ("seleccione las opciones para obtener su presupuesto")
//     alert ("1-30dias \n 2-15dias")
//     let tipo = prompt ("ingrese tipo de protesis que desea adquirir")
//     tipo = parseInt (tipo)

//     switch (tipo) {
//         case 1: 15000
//             break
//         case 2: 12000
//             break
//         default: alert ("opcion invalida")
//     }
//     return acumulador
// }

// menuPrincipal()



 
//  let modelMtb = parseInt(prompt("Por favor, selecione el modelo\n1-Specialized Epic Comp\n2-Specialized Epic Pro\n3-Specialized Epic Elite"))
//  let modelRuta = parseInt(prompt("Por favor, seleccione el modelo\n1-Specialized Allez\n2-Specialized Tarmac Sl6\n3-Specialized Tarmac Sl7"))
//  let modelGravel = parseInt(prompt("Por favor, seleccione el modelo\n1-Specalized Diverge Comp\n2-Specalized Diverge Pro\n3-Specalized Diverge Elite"))



 function menuPrincipal() {
         let total = 0;
         let menu;
         do {
             menu = parseInt(prompt("¡Bienvenido a JCBikes! \nPor favor, indique el tipo de operacion\n1-Comprar Nueva\n2-Comprar Usado\n3-Salir"));
             
             switch (menu) {
                 case 1:
                     total = total + comprarBici();
                     break;
                 case 2:
                    total = total + comprarUsado();
                     break;
                 case 3: 
                 alert ("Hasta luego.");
                     break;
                default:
                 alert ("La opción ingresa no es válida.");
             }
         } while (menu != 3);
     }


function comprarBici () {
    let acumulador = 0;
    alert("Por favor, seleccione el modelo que desea adquirir")
    alert("1-Specialized Epic Pro\n2-Specialized Tarmac\n3-Specialized Diverge\n4-Specialized Rockhopper")
    let tipo =parseInt(prompt("Ingreselo aqui"))
    switch (tipo) {
        case 1: 
            acumulador = acumulador + 1200000
        break
        case 2:
            acumulador = acumulador + 950000
        break
        case 3: 
            acumulador = acumulador + 1100000
        break
        case 4:
            acumulador = acumulador + 450000
        break
        default:
            alert ("opcion invalida")
    }
    return acumulador
}

function comprarUsado () {
    let acumulador = 0;
    alert ("por favor, seleccione el modelo que desea adquirir")
    alert ("1-Zenith Astra\n2-Mondraker Chrono RR")
    let tipo = parseInt(prompt("Ingreselo aqui"))
    switch (tipo) {
        case 1:
            190000
            break
        case 2: 
            650000
            break
        default:
            alert ("opcion invalida")
    }
    return acumulador
}

menuPrincipal ()