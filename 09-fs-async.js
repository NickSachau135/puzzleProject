const { readFile, writeFile } = require('fs');
let first;
let second;

console.log('start');
// returns a promise with an error or result
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.error(err)
        return
    }
    first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.error(err)
            return
        }
        second = result
        writeFile('./content/async-result.txt', `Here is the result: \n ${first} \n ${second}`, { flag: 'w' }, (err, result) => {
            if(err) {
                console.error(err);
                return
            }
            console.log('done with reading and writing virus');  
        })
    })
});

console.log(first);
console.log('starting next task');
console.log(second);