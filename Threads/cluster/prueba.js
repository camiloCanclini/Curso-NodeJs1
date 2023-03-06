const cluster = require('cluster');
const express = require('express');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  cluster.fork();

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  const app = express();

  app.get('/a', (req, res) => {
    // handle request only for route '/a'
    res.send(`Hello from worker ${process.pid}`);
  });

  app.listen(3000, () => {
    console.log(`Worker ${process.pid} started`);
  });
}

