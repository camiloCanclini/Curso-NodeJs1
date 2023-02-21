const http = require('http');

const server = http.createServer((req, res) =>{
    // console.log(res); // res = http.ServerResponse
    // console.log(req); // req = IncomingMessage

    console.log('La dirección del cliente es: ',req.socket.localAddress);
    console.log('El tipo de conexion del cliente es: ',req.socket.remoteFamily);
    console.log('El puerto del cliente es: ',req.socket.remotePort);

    console.log('\n--- PAQUETE HTTP ---');
    console.log('\n- METODO -\n');
    console.log( req.method );
    console.log('\n- URL -\n');
    console.log( req.url );
    console.log('\n- CABECERA -\n');
    console.log( req.headers );
    console.log('\n- BODY -\n');
    req.on('data',(datos) => {
        const datosConvertidos = datos.toString('utf-8');
        console.log(datosConvertidos)
    });
    
    res.writeHead(200, 'Todo en orden',) // setea el header de la respuesta con un codigo http y un mensaje
    res.write('Este es el mensaje del servidor: ')
    res.end(`Hola Cliente, Hola Mundo!`)
})

server.listen(3000,'localhost',() => console.log('servidor escuchando en: puerto 3000')); // Establece la direccion del servidor, tanto el port como el dominio.


console.log('El servidor se cerrará en 10 segundos...');
setTimeout(()=>{
    server.close();
},10000)

server.on('close', () =>{
    console.log('El servidor se cerró!');
})