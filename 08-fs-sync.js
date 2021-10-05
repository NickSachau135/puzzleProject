const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/sync-result.txt',
    `Here is the end: \n ${first}, \n ${second}`,
    //options go here
    { flag: 'w' } // w = overwrite, a = add
)

console.log(second);
console.log('finished');
console.log(first);