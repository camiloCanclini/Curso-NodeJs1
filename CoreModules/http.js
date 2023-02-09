const http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>Hola Mundo!</h1>');

    if (req.url === '/2') {
        res.write('<h2> Que Haces? </h2>')
        res.write('<a href="/">Volver al inicio</a>')
    }
    res.end
})
.listen(3000)