const res = require('express/lib/response')
const http = require('http')
const { url } = require('inspector')
const {readFileSync} = require('fs');
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) =>{
    const url = req.url
    //console.log('user hit the server')
    //res.end('home page')
    //home
    if (url ==='/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //about
    else if (url==='/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }

})
server.listen(7000)