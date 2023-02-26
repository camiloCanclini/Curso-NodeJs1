import http from 'http'
import ejs from "ejs";

http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html'); // Indicamos al cliente que tipo de archivo vamos a enviarle
    if (req.url === '/') {
        const plantillaRenderizada = ejs.renderFile('./views/index.ejs',{frase:"LA PAGINA", contenido:" Contenido de la página"})
        return plantillaRenderizada.then((template)=>{
            return res.end(template);
        })
    }

   const render = ejs.renderFile('./views/404.ejs',{frase:"Error 404: El Recurso Solicitado No Existe 😥"})
    return render.then(template => {
            return res.end(template)
    })

}).listen(3000);