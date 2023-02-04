const process = require('process');

/* process.stdin.on('data', (chunk) => {
    const input = chunk.toString().trim();
    process.stdout.write(`You wrote: ${input}\n`);
    process.exit()
  }); */
  
  process.stderr.write('Esto es un error por consola')