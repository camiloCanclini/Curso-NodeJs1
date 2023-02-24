/*Importamos Paquetes*/
import jwt from "jsonwebtoken";
import http from "http";
import dotenv from "dotenv";

dotenv.config() // Configuracion de dotEnv
// Paquete para cargar Enviroment Variables desde un archivo '.env'

/* SERVIDOR */
http.createServer((req, res)=>{
    console.clear() // Se limpia la consola para que sea mas comodo
    const secretKeySym = process.env.SYM_KEY // Desde .env me traigo la variable para Simetrica

    if (req.url === '/get/jwt') {

        /*
        Armamos el Token que se enviara al cliente
        (Como no hay Base de Datos, nos inventamos el JSON a enviar)
        */
        const token = jwt.sign({
            info: {id:1, nombre:"Fulano", ocupacion:"Programador"},
            message: 'Aquí esta su Token'}
            ,secretKeySym)
        
        return res.end(token) // Se envia el toquen al cliente
    }
    if (req.url === '/verify/jwt') {
        console.log(req.headers.authorization); // Mostramos el token

        // Fijate que, el token, viene en la cabecera de "Authorization" del http request
        const clientToken = req.headers.authorization;
        
        // Comprobamos que el TOKEN y su SIGNATURE sean validos
        try {
            jwt.verify(clientToken,secretKeySym);
            res.writeHead(200, 'Todo Correcto');
            return res.end('Cliente Autorizado 😃');
        } catch (error) {
            // Si la comprobación falla le avisamos al cliente (codigo 401 desautorizado)
            console.log('No se pudó verificar el token');
            res.writeHead(401,'Usted no esta autorizado');
            return res.end('El cliente no esta autorizado 😭')
        }
    }
    res.write('Request: ')
    res.end(req.url)
    
}).listen(3000)