const http = require('http');

const server = http.createServer().listen(3000,'localhost')

// Evento que se dispara cuando hay una nueva conexion
// y devuelve una funcion callback con un objeto socket como argumento.
server.on('connection', (socket)=>{
    console.log('Nueva Conexion!');
    
    socket.on('data',(datosCliente)=>{

        console.log('Datos Recibidos: ',datosCliente.toString());

        socket.write(
        'HTTP/1.1 200 OK\r\n' +
        'Content-Type: text/plain\r\n' +
        'Content-Length: 12\r\n' +
        '\r\n'+
        'Hola, mundo!');
    })

});

