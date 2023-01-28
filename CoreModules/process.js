'use strict'
const process = require('process');
//console.log(process);

//Devuelve el directorio en el que se encuentra situada la CLI
// Es similar a __dirname, pero la diferencia es que el anterior es relativo al script o archivo desde donde se llama y .cwd() depende de la consola
console.log(`Working Directorie: ${process.cwd()}`);


console.log(`argv: ${process.argv}`);

//console.log(process.env);