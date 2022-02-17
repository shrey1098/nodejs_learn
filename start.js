const http = require('http');
const hostname = '127.0.0.1';
const port = 5550;

const server = http.createServer((req, res) =>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end("{'Hello World':'1'}");
});

server.listen(port, hostname, () =>{
	console.log("server running at http://127.0.0.1:5550");
});
