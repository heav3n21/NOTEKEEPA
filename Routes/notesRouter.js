const notes = require('express').Router();
// const { json } = require('express');
const { readFromFile, readAndAppend } = require('../helpers/fsFunction');
const fs = require('fs');


notes.get('/',(req,res)=>{
readFromFile('./db/db.json').then((data)=>res.json(JSON.parse(data)));

} )

notes.post('/',(req,res)=>{

   readAndAppend(req.body,'./db/db.json');
   res.json('tip added');
} );

notes.delete('/:id',(req,res)=>{
   fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
  
      const jsonData = JSON.parse(data)
  
      const deleteit = jsonData.filter(obj=>{
         return obj.title !== req.params.id
      
      })

      fs.writeFile('./db/db.json', JSON.stringify(deleteit,null,2), err => console.log(err, 'err'));

    
   })

  


});


module.exports = notes;