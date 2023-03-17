const notes = require('express').Router();
const { json } = require('express');
const { readFromFile, readAndAppend } = require('../helpers/fsFunction');
notes.get('/',(req,res)=>{
    readFromFile('../db/db.json').then((data)=>res.json(JSON.parse(data)));
} )

notes.get('/1',(req,res)=>{
    res.sendFile('')
} )


module.exports = notes;