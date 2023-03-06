const cluster = require("cluster")
const numCPUs = require("os").cpus().length
const express = require("express")

function fibonacci(number=1){
  if (number <= 1) {
    return 1
  } else{
    return fibonacci(number - 1) + fibonacci(number - 2)
  }
}

if (cluster.isMaster) {

  const app = express()
  
  app.get("/a", (req, res) => {
    
    // Si se ingresa a la ruta '/a' y el proceso actual es el principal, creamos un worker
    const worker = cluster.fork()
    worker.send({ number: parseInt(req.query.number)})
    
    // Escuchamos el evento "message" del worker para recibir la respuesta del cálculo pesado
      worker.on("message", message => {
        //const endTime = new Date()
        res.send(message)
  
        // Enviamos un mensaje al worker para que se desconecte después de haber manejado la solicitud
        worker.send("disconnect")
      })
  
      // Enviamos un mensaje al worker con los datos de la solicitud
      //const startTime = new Date()

      
    })
    
    app.get("/b", (req, res) => {
      res.send("I am unblocked now")
    })
    
    app.listen(3636, () => console.log("listening on port 3636"))
    
  } else {

    // Escuchamos el evento "message" para recibir un mensaje de desconexión y cerramos el worker
    process.on("message", message => {
      
      if (message === "disconnect") {
        process.disconnect()
      }

      const result = fibonacci(parseInt(message.number))
      process.send({ result })

    })
}
