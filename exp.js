const { query, json } = require('express');
var express = require('express');
var app = express();
const  d  = require('./db');
app.get('/hello', findall){
   const query=`select * from employee`
   var result="hello world!"
   var t=d.findall(query);
  
   console.log(t);

   res.json(t)
});

app.listen(3000);