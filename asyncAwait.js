function sumar(acumulado, valor){
    return new Promise(function(resolve, reject){
        if(valor == 2) return reject("El número 2 es de mala suerte")
        let suma
        setTimeout(function () {
        suma = acumulado + valor
        resolve(suma)
     }, 1000);
    }) 
}

async function main(){
    let acumulado = 0
    try{
        acumulado = await sumar(acumulado, 4)
        acumulado = await sumar(acumulado, 4) 
        acumulado = await sumar(acumulado, 2)  
    }catch(error){
        console.log(error)
    }
} 
main()




console.log("Estoy al final!!")
