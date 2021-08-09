'use strict'
//  dos herramientas de control de flujo if y switch
// let hora = 18

// if(hora >= 6 && hora < 12){
//     console.log('Buenos dias')
// }else if(hora>=12 && hora < 18){
//     console.log('buenas tardes')
// }else{
//     console.log('Bunas noches')
// }
// sentencia Switch

let rol= 'usuario'

switch (rol) {
    case 'usuario':
        console.log(' es un user')
        break;
    case 'usuario':
        console.log(' es un admin')
        break;

    default:
    console.log(' no se quien seas')
    break;
}