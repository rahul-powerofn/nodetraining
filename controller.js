const { query } = require('express');
const  db  = require('./db');


function select()
{
   const query=`select * from employee`;

  console.log(db.findall(query));


}

select();

module.exports.select=select;