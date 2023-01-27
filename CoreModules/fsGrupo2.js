// +-- " G R U P O 2 " --+

const fs = require('fs');

fs.open('./data/elArchivo.txt','r+',(err,fd)=>{
    if (err) {
        console.log('Fallo al abrir archivo: ',err.message)
    } else {
        fs.read(fd, (err,br,bufferobj)=>{
            if (err) {
                console.log('Fallo al leer archivo: ',err.message)
            } else {
                console.log(`\nSe leyeron ${br} bytes del buffer\n`);
                console.log(`El buffer traducido:\n${bufferobj}\n`);
                console.log(bufferobj.byteLength);
            }
            fs.write(fd, 'HAbiaUnaVez',(err,bw,buffer)=>{
                if (err) {
                    console.log('Fallo al escribir archivo: ',err.message)
                } else {
                    console.log(`\nSe escribieron ${bw} bytes del buffer\n`);
                    console.log(`El buffer traducido:\n${buffer}\n`);
                }
            });
            
        });
        fs.close(fd, ()=>{
            console.log('El archivo se cerró');
        });
    }
});