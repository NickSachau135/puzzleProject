const intro = require('./01-intro');
const functions = require('./03-module-functions')
const { kids, num2, num3 } = require('./04-globals')
const { num } = intro
const freemem = require('./05-os-module')

console.log(freemem)

// APIKEY is a local variable & unseeable from base file
const APIKEY = 'Liam likes boys'

console.log(`loging from modules ${num} + ${num3}`);

functions.log(`loging from functions ${num + num2}`)