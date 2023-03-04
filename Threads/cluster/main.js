const cluster = require("cluster")
const numCPUs = require("os").cpus().length
const express = require("express")

const app = express()

app.get("/a", (req, res) => {
  if (cluster.isMaster) {
    // Si se ingresa a la ruta '/a' y el proceso actual es el principal, creamos un worker
    const worker = cluster.fork()

    // Escuchamos el evento "message" del worker para recibir la respuesta del cálculo pesado
    worker.on("message", message => {
      const endTime = new Date()
      res.json({
        result: message.result,
        time: endTime.getTime() - message.startTime.getTime() + "ms",
      })

      // Enviamos un mensaje al worker para que se desconecte después de haber manejado la solicitud
      worker.send("disconnect")
    })

    // Enviamos un mensaje al worker con los datos de la solicitud
    const startTime = new Date()
    worker.send({ number: parseInt(req.query.number), startTime })
  } else {
    // Si se ingresa a la ruta '/a' y el proceso actual es un worker, realizamos el cálculo pesado
    isPrime(parseInt(req.query.number), result => {
      process.send({ result, startTime: new Date() })
    })

    // Escuchamos el evento "message" para recibir un mensaje de desconexión y cerramos el worker
    process.on("message", message => {
      if (message === "disconnect") {
        process.disconnect()
      }
    })
  }
})

app.get("/b", (req, res) => {
  res.send("I am unblocked now")
})

app.listen(3636, () => console.log("listening on port 3636"))

function isPrime(number) {
    let isPrime = true
  
    for (let i = 3; i < number; i++) {
      if (number % i === 0) {
        isPrime = false
        break
      }
    }
  
    return {
      number: number,
      isPrime: isPrime,
    }
  }