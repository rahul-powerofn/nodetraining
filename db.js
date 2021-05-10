const { Client } = require('pg');
var express = require('express');
const { json } = require('express');
const { rows } = require('pg/lib/defaults');
var app = express();
 
const client = new Client({
    user: 'rahul1',
    host: '35.210.16.114',
    database: 'database1_rahul',
    password: 'rahul1',
 
});
 

client.connect();

// app.get('/select',(req,res)=>{
//     client.query('select * from employee',(err,result)=>{
//     if(err) throw err;
//     client.end()
//     res.send(JSON.stringify(result));
//     res.end();
//     });



// });


// const query = `
// SELECT *
// FROM employee
// `;
function findall(query)
{  
    var result={};
 
    client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    // for (let row of res.rows) {
    //     // result.push(row);
    //     console.log(row);
    // }
    result=res.rows;
    client.end();

    // result.push()
    // result=res.rows;
    // console.log(res.rows)
    // obj=res[rows];
//     //   return JSON.stringify(res);
//    val obj=stringify(res);
//   console.log(result)
   
   });
  
// return result;

}

module.exports.findall=findall
// // findall(query)

