promesa1 = new Promise((resolve, reject) =>{
    let miArray = [1, 2 , 3]
    if (miArray.length == 0) {
        reject("El Array esta Vacio Che","y bueno, no tiene nada")
    } else {
        resolve(miArray, "El array tiene cosas che")
    }
});

promesa1
.then((response) => {
console.log('response:', response)
})
.catch(error =>{
    console.log('error:', error)
})