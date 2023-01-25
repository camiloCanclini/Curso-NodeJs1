const fs = require('fs');

// +-- A R C H I V O S --+

/* // Leer
fs.readFile('./data/archivo.txt', (err,data) => {
    if (err) throw err;
    console.log('1:',data);
    console.log('2:',data.toString());
    // Leer Archivos y convertirlos antes (UTF-8)
    fs.readFile('./data/archivo.txt', 'utf-8',(err,data) => {
        //if (err) throw err;
        console.log('3:',data);
    });
});

// Crear y Editar

// Se modifica el archivo entero
fs.writeFile('./data/nuevoArchivo.txt','Hola! Soy un archivo nuevo', (err)=>{
    if (err) throw Error('Hola che');
    console.log('4: el archivo fue creado si no existia, y se editó');
})

//Se agrega información nueva
fs.appendFile('./data/nuevoArchivo.txt', '\nHola!', (err)=>{
    if (err) throw Error('Hola che');
    console.log('5: el archivo fue creado si no existia, y se agregó info nueva');
}) */

fs.open('./data/archivo.txt','w+',(err,archivoAbierto) =>{
    console.log('hola');
    fs.write(a,s,d,q,)
    fs.write(archivoAbierto,'\nEsto es una linea nueva',(err) =>{
        if (err) {
            console.log('chau');
        }
        /* console.log('Se escribió el archivo');
        fs.read(archivoAbierto,'utf-8',(err,d) =>{
            console.log('holache: ',d);
        }) */
    })
    
})
