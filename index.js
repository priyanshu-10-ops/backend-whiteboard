const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("Got a new request");
  res.end("Hi there!"); 
});  
//Created server object
//callback function passed to create server. 

server.listen(3030, 'localhost', ()=>{
  console.log("Server is listening on PORT 3030");
});