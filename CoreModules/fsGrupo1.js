const fs = require('fs');
const { exit } = require('process');

// +-- " G R U P O 1 " --+

// Leer
fs.readFile('./data/elArchivo.txt', (err,data) => {
    if (err) console.log('Ocurrió un error al leer');
    console.log('1:',data);
    console.log('2:',data.toString());
    // Leer Archivos y convertirlos antes (UTF-8)
});


// Crear y Editar

// Se modifica el archivo entero
fs.writeFile('./data/nuevoArchivo.txt','Hola! Soy un archivo nuevo', (err)=>{
    if (err) throw Error('Hola che');
    console.log('3: el archivo fue creado si no existia, y se editó');
});

//Se agrega información nueva
fs.appendFile('./data/nuevoArchivo.txt', '\nHola!', (err)=>{
    if (err) console.log('Hola che');
    console.log('4: el archivo fue creado si no existia, y se agregó info nueva');
});

// Chequea si el archivo es accesible 
// (Si existe, si puede ser leido, escrito o ejecutado
// Se usan constants:
// F_OK: Verifica si el archivo existe
// R_OK: Verifica si el archivo puede leerse
// W_OK: Verifica si el archivo puede escribirse
// X_OK: Verifica si el archivo puede ejecutarse
fs.access('./data/datos.txt',fs.constants.F_OK, (err) =>{
if (err) {
    console.log('Ocurrió un error al verificar el acceso al archivo')
}else{
    console.log(' 5: El archivo existe (En este caso [F_OK])');
}
})

// Permite copiar archivos
// Este método tambien acepta constantes para cambiar el comportamiento del método
// (Ver las constantes en la documentacion oficial)
fs.copyFile('./data/elArchivo.txt','./data/elArchivoCopiado.txt', fs.constants.COPYFILE_EXCL,(err) => {
    if (err) {
        console.log('Ocurrió un error al copiar el archivo');
    } else {
        console.log('6: El archivo se copió');
    }
})

//Devuelve información (Metadatos) del archivo
fs.stat('./data/datos.txt',(err, stats)=>{
    if (err) {
        console.log('Ocurrio un error al obtener metadatos');
    } else {
        console.log('7: metadatos: ', stats);
        console.log('7: Tamaño del Archivo: ', stats.size, 'bytes');
    }
})

//Crea un directorio
fs.mkdir('./data/nuevoDirectorio',(err)=>{
    if (err) {
        console.log('Ocurrió un error al crear directorio');
    } else {
        console.log('8: El directorio se creó correctamente');
    }
})

// Abre un directorio
fs.opendir('./data',(err,dir)=>{
    if (err) {
        console.log('Ocurrió un error al abrir el directorio');
    } else {
        console.log('9: dir: ', dir);
    }
})

// Borra un archivo o un directorio
fs.rm('./data/nuevoArchivo.txt',(err)=>{
    if (err) {
        console.log('Ocurrió un error al borrar el directorio');
    } else {
        console.log('10: Se borró el directorio (nuevoArchivo)');
    }
})

// Trunca un archivo (Vacia el archivo, borra todo el contenido)
fs.truncate('./data/nuevoDirectorio/archivoTruncado.txt', (err)=>{
    if (err) {
        console.log('Ocurrió un error al truncar el archivo');
    } else {
        console.log('11: Archivo Truncado exitosamente');
    }
})

setTimeout(()=>{
    console.log('Empezando a observar el archivo');
    console.log('Realice algun cambio en el archivo (Tiene 10 seg)');


    // Dispara un evento cuando el archivo es alterado 
    // Es un loop, se queda escuchando si ocurren cambios en el archivo y ejecuta el callback
    fs.watch('./data/nuevoDirectorio/archivoObservado.txt', (event, file) =>{
        console.log('12: El archivo: ', file, 'Fué modificado');
        console.log('12: El evento que se disparó fue: ', event);

        console.log('Cerrando programa');
        process.exit();
    })


    setTimeout(()=>{
        console.log('\n\nNo se realizaron cambios en el archivo');
        console.log('Cerrando programa');
        process.exit();
    },10000)
},4000);