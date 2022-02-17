const http = require('http');

const PORT = 5000;
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Home Page')
  }
  else if(req.url === '/about'){
    res.end('About Page')
  }
  else {
    res.end('<h1>Error page</h1><a href="/">back home</a>')
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})