const eventEmitter = require('events')
const customEvent = new eventEmitter();

customEvent.on('request', (name, id) => {
    console.log(`${name} has an id of ${id}`);
})

customEvent.on('food', (name, _, __, food) => {
    console.log(`${name} likes to eat ${food}`);
})

customEvent.emit('food', "jimmy", 12345, true, 'donuts')