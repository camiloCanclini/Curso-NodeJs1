const http = require('http');

//Crea un WEBSERVER - DEVUELVE UN EVENTEMITTER (ON, ONCE, EMIT, ETC)



console.log(
    
    // Devuelve un arreglo que contiene todos los metodos soportados por el módulo
    http.METHODS,
    //Devuelve un objeto que contiene el codigo de estado http con su significado
    http.STATUS_CODES,

    
    );

    const http = require('http');
    const url = require('url');
    
    // Crea un servidor HTTP usando la clase http.Server
    const server = http.createServer((req, res) => {
      // Obtiene la URL de la solicitud
      const parsedUrl = url.parse(req.url, true);
    
      // Escribe la respuesta HTTP
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hello, ${parsedUrl.query.name || 'world'}!\n`);
    });
    
    // Inicia el servidor en el puerto 8080
    server.listen(8080, () => {
      console.log('Servidor iniciado en http://localhost:8080');
    });
    
    // Envía una solicitud HTTP usando la clase http.ClientRequest
    const options = {
      hostname: 'localhost',
      port: 8080,
      path: '/?name=Node.js',
      method: 'GET',
    };
    
    const req = http.request(options, (res) => {
      // Muestra la respuesta HTTP
      console.log(`Estado: ${res.statusCode}`);
      console.log(`Encabezados: ${JSON.stringify(res.headers)}`);
    
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        console.log(`Respuesta: ${chunk}`);
      });
      res.on('end', () => {
        console.log('No hay más datos en la respuesta.');
      });
    });
    
    req.on('error', (e) => {
      console.error(`Error al enviar la solicitud: ${e.message}`);
    });
    
    req.end();
    