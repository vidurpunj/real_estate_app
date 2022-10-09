const express = require('express');
const app = express()
// const morgan = require('morgan')
var bodyParser = require("body-parser");

// const UserRoute = require('./routes/user')
// app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Database connectivity
const { default: mongoose } = require('mongoose');
var moongose = require("mongoose");  // step #1 DB
var dbURL = require("./properties").DB_URL; // db url
moongose.connect(dbURL)
moongose.connection.on("connected", ()=>{
    console.log("Connected to mongo db using Mongose JS");
})

app.listen(4000);
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
    const user =  User.create({
        first_name: 'Tiger',
        email: req.body.email,
        password: req.body.password,
      });
      res.send(req.body);
})

app.get('/users.json', (req,res)=>{
    res.json({"name": "Vidur Punj"})
})



app.use(express.static('public'))