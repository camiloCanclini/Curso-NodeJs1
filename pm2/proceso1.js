import http from "http";


http.createServer((req,res)=>{
    if (req.url === '/') {
        res.writeHead(200,'ok');
        res.write('Hola Soy el Proceso 1');
        res.end('.');
    }
    
}).listen(3000)