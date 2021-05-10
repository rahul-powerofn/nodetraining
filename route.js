const router=require('express').Router()

const con=require('./controller')


var express = require('express')


router.get('/',con.select())


module.exports=router;