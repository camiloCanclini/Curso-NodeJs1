// fs module for reading writing data
const fs = require('fs');

// readable stream using our declared file. 
const readable = fs.createReadStream("unshift.txt");

// initializing our chunk
let chunk;

readable.on('readable', () => {
// while loop to iterate through the file
    while (chunk = readable.read(1)) {
        console.log(chunk);
    }
    console.log('holaa');
});
