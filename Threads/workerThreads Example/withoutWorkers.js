const { Worker } = require('worker_threads');
const app = require('express')()

app.get('/a',(req,res)=>{
    function sum(n) {
        let result = 0;
    
        for (let i = 1; i <= n; i++) {
          result += i;
        }
      
        return result;
    }
    
    // Se Empieza pidiendo que calcule la suma de 0 a 1000000000
    
    res.send(sum(10000000000)).status(200);
})

app.get('/b',(req,res)=>{
    res.send('Hola').status(200)
})

app.listen(3636, () => console.log("Escuchando en puerto 3636"))