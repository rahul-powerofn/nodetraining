const http = require('http');
const  db  = require('./db');
const mainRoute=require('./route')



const hostname = '127.0.0.1';
const port = 3000;
var express = require('express');
var app = express();


app.use(mainRoute)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end(
    "welcome to page"
    
    );
});
app.get('/hello', function(req, res){
    res.send("Hello World!");
 });
 
app.use
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});