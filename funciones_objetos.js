let persona = {
    nombre:'manuel' ,
    edad: 38,
    caminar: function(){
        console.log(this.nombre,'estoy caminando')
    },
    saltar: function(){
        console.log('estoy Saltando',this.edad)
    }
}
// persona.caminar()
// persona.saltar()

// ***** factory functitons

function crearPersonas(nombre, edad){
return {
    nombre,
    edad,
    caminar(){
        console.log(this.nombre,'esta caminando')
    },
    años(){
        console.log(this.edad, 'años')
    },
}
}
let persona_uno = crearPersonas('heri',30)
console.log(persona_uno)
let persona_dos = crearPersonas('Brandon',35)
console.log(persona_dos)