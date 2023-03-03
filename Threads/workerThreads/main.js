const { Worker } = require('worker_threads');

const app = require('express')()

app.get('/a',(req,res)=>{
    function fibonacci(n) {
        return new Promise((resolve, reject) => {

            const worker = new Worker('./worker.js', { workerData: n });

            worker.on('message', resolve); // Se recibe el mensaje con el resultado del worker
            worker.on('error', reject); // Se recibe un error del worker

        });
    }
    const startTime = new Date()
    // Retorna una promesa 
    fibonacci(parseInt(req.query.number)) //parseInt is for converting string to number
    .then(result => res.send(`La suma es: ${result}`))
    .catch(error => console.error(error));
    const endTime = new Date()
});

app.get('/b',(req,res)=>{
    res.send('Hola').status(200)
})

app.listen(3636, () => console.log("Escuchando en puerto 3636"))