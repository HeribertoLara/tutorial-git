// class Persona{
//     constructor(valor){
//         this.nombre = valor
//     }
//     camina(){
//         console.log("la persona camina")
//     }
// }

// const p = new Persona("Manuel");
// p.camina()

class Coche{
    constructor(color){
        this.color = color
    }
    acelerar(){
        console.log("el coche acelera")
    }
    static claxon(){
        console.log("Pipi")
    }
}
// const ford = new Coche("rojo")
Coche.claxon();
