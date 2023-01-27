// +-- " G R U P O 2 " --+

const fs = require('fs');

// Abriendo el Archivo
fs.open('./data/elArchivo.txt','r+',(err,fd)=>{
    if (err) {
        console.log('Fallo al abrir archivo: ',err.message)
    } else {

        // Leyendo el archivo abierto previamente
        fs.read(fd, (err,br,bufferobj)=>{
            if (err) {
                console.log('Fallo al leer archivo: ',err.message)
            } else {
                console.log(`\nSe leyeron ${br} bytes del buffer\n`);
                console.log(`El buffer traducido:\n${bufferobj}\n`);
                console.log(bufferobj.byteLength);
                
                // Una vez leido se escribe el archivo
                fs.write(fd, 'Escribiendo...',(err,bw,buffer)=>{
                    if (err) {
                        console.log('Fallo al escribir archivo: ',err.message)
                    } else {
                        console.log(`\nSe escribieron ${bw} bytes del buffer\n`);
                        console.log(`El buffer traducido:\n${buffer}\n`);

                        // Una vez que se terminó de escribir se cierra el archivo
                        fs.close(fd, ()=>{
                            console.log('El archivo se cerró');
                        });

                    }
                });


            }
        });

        
    }
});