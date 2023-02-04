console.log('\n P R O C E S S \n');

const { dir } = require('console');
const process = require('process'); //No es necesario, ya que es un objeto global

//console.log(process);

//Devuelve el directorio en el que se encuentra situada la CLI
// Es similar a __dirname, pero la diferencia es que el anterior es relativo al script o archivo desde donde se llama y .cwd() depende de la consola
console.log(`\nWorking Directory:\n ${process.cwd()}\n`);

//Devuelve un Arreglo con los parametros que enviamos al momento de ejecutar nuestra aplicación con:
// node app.js arg1 arg2 ... argn
console.log('\nargv:');
dir(process.argv);

// Devuelve las Environment Variables del sistema donde nos encontramos
console.log('\nenv:');
dir(process.env);


//Algunas Environment Variables Importantes
console.log('\nenv.LANG:');
dir(process.env.LANG);
console.log('\nenv.TEMP:');
dir(process.env.TEMP);
console.log('\nenv.Path:');
dir(process.env.Path);
console.log('\nenv.USERNAME:');
dir(process.env.USERNAME);

// Devuelve el Process IDentifier, este es un numero que el sistema operativo le asigna a nuestro proceso de Node
console.log('\nprocess.pid:');
console.log(process.pid);

// Entrada de datos por consola
//console.log('\n stdin:');
//console.log(process.stdout.write('holaaaaa\n'));

// Event Listener



//  Como dijimos antes, el módulo permite manejar eventos que ocurren durante la ejecución del proceso o programa
// En este caso el metodo process.on es un event listener y el evento 'exit' se queda esperando a que el proceso haya realizado todas las tareas para ejecutar una callback

process.on('exit', (code) => {
    console.log(`Codigo de Salida: ${code}`);
    console.log('Saliendo del Programa, estas es la ultima linea');
})
 
// Metodos para terminar el proceso

// 1. Utilizando un event Listener (Como vimos antes)

//2. process.exit(code): este metodo termina el proceso abrutamente, permite pasar por parametro un codigo que sera devuelto al sistema para indicar porqué terminó. Vease la tabla de codigos de salida.

/* process.exit(1); */

// 3. process.kill(pid,signal): Este método envia una señal al proceso que coincida con el PÏD que pasamos como argumento, las señales indican eventos, por lo que el proceso puede realizar logica en base a la señal que reciba

/* process.kill(process.pid,'SIGKILL'); */

// La señal se maneja con process.on(event,callback)

/* process.on('SIGKILL', ()=>{
    console.log('Lo recibí che');
}) */

// 4. process.abort(): Funciona como exit pero la diferencia es que este devuelve un core file. El core file es un instancia representada en texto que muestra las variables que se encontraban en memoría hasta el momento de la finalizacion.

/* process.abort() */

// ESCRIBIR Y LEER EN CONSOLA (P R O C E S S)
// Tenemos que saber que las propeidades que vamos a ver para realizar estas operaciones devuelven objetos streams y es con esos con los que operamos al final

// Escribir por Consola
console.log('\nprocess.stdout:');
process.stdout.write('Hola Che');
console.log('\n\n+------------+ \n');

// Leer por consola
process.stdin.on('data', (data)=>{
    process.stdout.write(`process.stdout.write(): ${data}`);

    // Errores por consola
    process.stderr.write('Error: esto es un error por consola :D')
})

