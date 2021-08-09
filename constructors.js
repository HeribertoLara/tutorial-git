function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.caminar = function(){
        console.log("caminando")
    };
}

const heri = new Persona("heriberto", 38);