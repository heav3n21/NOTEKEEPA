const express = require(`express`)
const notesRouter = require('./notesRouter');
// const { json } = require('express');
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/notes', notesRouter);





module.exports = app;