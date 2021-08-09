function sumar(...args){
    return args.reduce((a,b)=> a + b)
}

console.log(sumar(1,2,3,4,5,6,7,8,9+10))