const express = require('express')
const app = express()

app.listen(4000)
const path = require('path')

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
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


app.use(express.static('public'))