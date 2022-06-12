const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second)
writeFileSync('./content/result.txt', `Here is the solution one two: ${first}, ${second}`)
console.log('done')
console.log('starting next')