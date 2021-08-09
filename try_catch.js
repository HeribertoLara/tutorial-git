const persona = {
    nombre: ' heriberto',
    apellido: 'Lara',
    get nombreCompleto(){
        return "hola"
    },
    set nombreCompleto(valor){
        
        if(typeof valor !== 'string'){
            throw new Error(`${valor} esto no es un string` )
        }
        let partes = valor.split(" ")
        this.nombre = partes[0]
        this.apellido = partes[1]
    }
    }

try{
persona.nombreCompleto =true
}catch(e){
console.log(e)
alert(e)
}
console.log(persona)