const { Worker } = require('worker_threads');

const app = require('express')()

app.get('/a',(req,res)=>{
    function fibonnaci(n) {
        return new Promise((resolve, reject) => {

            const worker = new Worker('./worker.js', { workerData: n });

            worker.on('message', resolve); // Se recibe el mensaje con el resultado del worker
            worker.on('error', reject); // Se recibe un error del worker

        });
    // Se Empieza pidiendo que calcule la suma de 0 a 1000000000
    }
    fibonnaci(req.query.number)// Como retorna una promesa...
      .then(result => res.send(`Fibonnaci: ${result}`))
      .catch(error => console.error(error));
});

app.get('/b',(req,res)=>{
    res.send('Hola').status(200)
})

app.listen(3636, () => console.log("Escuchando en puerto 3636"))

