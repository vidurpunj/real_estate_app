const express = require('express');
const app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());


const { default: mongoose } = require('mongoose');
var moongose = require("mongoose");  // step #1 DB
var dbURL = require("./properties").DB_URL; // db url
moongose.connect(dbURL)
moongose.connection.on("connected", ()=>{
    console.log("Connected to mongo db using Mongose JS");
})

app.listen(4000)
const path = require('path')

app.get('/admin', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'admin.html'))
    res.status(200)
})
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/index1', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/index2', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index2.html'))
})
app.get('/index3', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index3.html'))
})

app.get('/index', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.get('/post', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'post.html'))
})

app.get('/users', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'users.html'))
})
app.get('/sample_user', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'sample_form.html'))
})
app.post('/sample_user', (req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'sample_form.html'))
    console.log(req.number)
    console.log(req.body)
    console.log(req.params.body)
    console.log(req.url)
    res.send(req.body);
})

app.get('/users.json', (req,res)=>{
    res.json({"name": "Vidur Punj"})
})



app.use(express.static('public'))