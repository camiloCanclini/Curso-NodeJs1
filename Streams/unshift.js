const { Readable } = require('stream');

const stream = new Readable({
  read() {}
});

stream.push('chunk1\n');
stream.push('chunk2\n');
stream.push(null);

stream.unshift('chunk0\n');

stream.on('data', chunk => {
  console.log(chunk.toString());
});

// Salida:
// chunk0
// chunk1
// chunk2
