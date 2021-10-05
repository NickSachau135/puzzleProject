const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 1})

stream.on('data', (result) => {
    console.log(result);
    console.log('```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````');
})

stream.on('error', (err) => {
    console.error(err)
})