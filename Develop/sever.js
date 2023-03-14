const express = require('express');
const path = require('path');
const api = require('./routes/index.js');


const PORT = 3001;

const app = express();

//middlewaare
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use ('/api', api)
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.sendfile(path.join(__dirname,'/public/index.html'))
})



app.listen(PORT,()=>{
console.log('hi port is here');}
);