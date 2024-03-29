const express = require('express');
const path = require('path');
 const api = require('./Routes/index');


const PORT = process.env.PORT || 3005;

const app = express();

//middlewaare
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 app.use ('/api', api)
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/notes.html'))
})


app.listen(PORT,()=>{
console.log('hi port is here');}
);