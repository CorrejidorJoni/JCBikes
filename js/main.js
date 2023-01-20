
/********Funcion Principal********/

 function menuPrincipal() {
              let total = 0;
              let menu;
               do {
                   menu = parseInt(prompt("¡Bienvenido a JCBikes! \nPor favor, indique la operación que desea realizar:\n1-Comprar Nuevo\n2-Comprar usado\n3- Salir"));
                  
                  switch (menu) {
                     case 1:
                        total = total + comprarNuevo();
                         break;
                      case 2:
                          total = total + comprarUsado();
                          break;
                     case 3: 
                         alert("¡Muchas gracias por visitar JCBikes, hasta la próxima!")
                         break;
                     default:
                       alert ("La opción ingresa no es válida.");
                   }
               } while (menu != 3);
           }



/********Funcion Comprar Nuevo********/

 function comprarNuevo () {
    const bicicletas =[
        { nombre: "Specialized Epic", precio: 1200000},
        { nombre: "Canondale Scalpel", precio: 1700000},
        { nombre: "Trek Supercaliber", precio: 2200000},
        { nombre: "Canyon Supra", precio: 1500000},
        { nombre: "Raleight Bronx", precio: 600000},
    ]
    
    
    
/********Método Array********/
    
bicicletas.push({nombre: "Zenith astra", precio: 500000});
bicicletas.push({nombre: "Mondraker Chorno RR", precio: 800000})
console.log(bicicletas); 
     


/****Función de orden superior****/

const totalCarrito = bicicletas.reduce((acumulador, bicicleta) => acumulador + bicicleta.precio, 0);
console.log(totalCarrito);

    

let total = 0;
let acumulador = 0;
let modeloNuevo = parseInt(prompt("Por favor, seleccione el modelo que desea adquirir:\n1-Specialized Epic\n2-Canondale Scalpel\n3-Trek Supercaliber\n4-Canyon Supra\n5-Raleight Bronx"))
    switch (modeloNuevo) {
        case 1:  if (total == 0){
            alert ("El modelo Specialized Epic tiene un precio de: " + (total = acumulador + 1200000))
            }
            break;
        case 2: if (total == 0){
            alert("El modelo Canondale Scalpel tiene un precio de: "  + (total = acumulador +  1700000))
            }
            break;
        case 3: if (total == 0){
            alert("El modelo Trek Supercaliber tiene un precio de: " + (total = acumulador + 2200000))
            }
            break;
        case 4: if (total == 0){
            alert("El modelo Canyon Supra tiene un precio de: " + (total = acumulador + 1500000))
            }
            break;
        case 5: if (total == 0){
            alert("El modelo Raleight Bronx tiene un precio de: " + (total = acumulador + 600000))
            }
            break;
        default: 
            alert ("opcion invalida")
          }
        return acumulador
    } 
   
   
   
/********Función comprar usado********/   
    
function comprarUsado () {
let total = 0;
let acumulador = 0;
let modeloUsado = parseInt(prompt("Por favor, seleccione el modelo que desea adquirir:\n1-Zenith Astra\n2-Mondraker Chrono RR"))
        switch (modeloUsado) {
        case 1: if (total == 0){
            alert("El modelo Zenith Astra tiene un precio de: " + (total = acumulador + 190000))
            }
            break;
        case 2: if (total == 0){
            alert("El modelo Mondraker Chrono RR tiene un precio de: " + (total = acumulador + 650000))
            }
            break;
        default:
            alert ("opcion invalida")
            }
            return acumulador
    }
        
menuPrincipal () 































