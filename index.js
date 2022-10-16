const express = require('express'); // Import express framework into node project
const dotenv = require('dotenv'); //  save enviroment variables
const morgan = require('morgan'); // For database
const bodyParser = require("body-parser"); // To parse request
const path = require('path'); // Its inbuilt in node modules, no need to import separately
const expressLayouts = require('express-ejs-layouts');
const { application } = require('express');
const app = express();

// DB connection 
const connectDB = require('./server/database/connection')

//  Set port from environment variables
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

// log request
app.use(morgan('tiny'))

// mongo DB connection
connectDB();

//pass the request to body parser
app.use(bodyParser.urlencoded({extended: true}))

// To set the view engine
// ejs is the template engine we are using
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname), "views/ejs") // if I have all my ejs file inside views/ejs


// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// app layout
application.use(expressLayouts);


// load routes
app.use('/',require('./server/routes/router'))

app.listen(PORT, ()=>{
    console.log(`Server is runing at ${PORT}`)
});