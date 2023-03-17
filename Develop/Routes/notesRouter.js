const notes = require('express').Router();
const { json } = require('express');
const { readFromFile, readAndAppend } = require('../helpers/fsFunction');
// notes.get('/',(req,res)=>{
//    const hi= readFromFile(dbData).then((data)=>res.json(JSON.parse(data)));
// console.log(hi);
// } )

notes.post('/',(req,res)=>{
   console.log( req.body,'you');

   readAndAppend(req.body,'./db/db.json');
   res.json('tip added');
} )


module.exports = notes;