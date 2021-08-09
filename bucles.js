'use strict'

//  for ( sentencia inicial, sentencia evalualcion, sentencia incremental)

// for (let i = 0; i < 5; i++){
//     console.log('Hola mundo!!',i)
// }

// ++++++ Bucle While

// let i = 0
// while(condicion){
//     ejecucuion
//     incremento
// }
// let i = 0
// while(i <= 5){
//     console.log(i)
//     i++
// }
// let i = 0
// do{
//     console.log('entramos al do y ejecutamos')
//     console.log(i)
//     i++
// } while(i<=5)// **** Do while
// forin 

let persona = {
    nombre: 'Manuel',
    edad: 62,
}

for(let key in persona){
    console.log(key, persona[key])

}

// for of se utiliza principalmente en arrays
let colores = ['rojo', 'azul', 'amarillo']
