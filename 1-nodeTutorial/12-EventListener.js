// const EventEmitter = require('events');
const http = require('http');

const server = http.createServer()

server.on('request', (req, res)=>{
  res.end('Welcome')
})

server.listen(5000)
// const customEmmiter = new EventEmitter()
//
// customEmmiter.on('response', (name, id)=>{
//   console.log(`data recieved ${name}${id}`)
// })
//
// customEmmiter.on('response', ()=>{
//   console.log('second emit');
// })
//
// customEmmiter.emit('response', 'john', 34)
