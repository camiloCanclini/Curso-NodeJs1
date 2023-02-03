const process = require('process');

process.stdin.once('data', (chunk) => {
    const input = chunk.toString().trim();
    process.stdout.write(`You wrote: ${input}\n`);
    process.exit()
  });
  