// function calcularImpuestos(precio_base, impuestos=0.16){
//     impuestos = impuesto||0.21
//     let iva = precio_base*impuestos
//     return precio_base + iva
// }
// let camisa = calcularImpuestos(80, 021)
// console.log(camisa)

// ***** Get and set

const persona = {
    nombre : 'Heriberto',
    apellido: 'Lara',
    get nombre_completo(){
        return `${persona.nombre} ${persona.apellido}`
    },
set nombreCompleto(valor){
    let partes = valor.split(' ')
    this.nombre = partes[0]
    this.apellido = partes[1]
    },

}
persona.nombreCompleto = "Evelin Aguilar"
console.log(persona.nombre_completo)