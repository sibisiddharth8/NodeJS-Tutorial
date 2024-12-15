const { createReadStream } = require('fs');

const stream = createReadStream('.../contents/big.txt');

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(err);
});