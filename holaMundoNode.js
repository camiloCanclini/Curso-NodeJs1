const http = require('http');

console.log('\n__filename:', __filename);
console.log('__dirname:', __dirname,'\n');
console.log('hola');
const hostname = '127.0.0.1';
const port = 3000;
console.log(new Error);
const server = http.createServer((req, res) => {
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
