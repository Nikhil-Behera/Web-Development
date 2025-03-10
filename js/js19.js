const http = require('http');
const fs = require('fs');
const text = fs.readFile('js10.html');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(text)
})
server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80")
})