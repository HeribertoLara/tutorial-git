// const objeto = {
//     nombre = ' Heri',

// };

// objeto.edad = 30
// copiar objetos

const objeto_uno = {
    par1: 5,
    functObj : function(){
        console.log('mostrar')
    }
}

const obj2 ={}

for(let key in objeto_uno){
    obj2[key]=objeto_uno[key]

}
// segundo  metodo
const objeto_tres = Object.assign({},objeto_uno)

// metodo tres spread operation

const obj4 = {...objeto_uno}
