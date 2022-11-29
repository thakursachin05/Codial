const express = require('express');
// const cookieParser = require('cookie-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use(express.static('./assets'));

// app.use(expressLayouts);
// app.set('layout extractStyles', true);
// app.set('layout extactScripts',  true);

// use express router
app.use('/', require('./routes'));

// Setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        // console.log("Error : " , err);
        // We can also use interpolation by the use of backticks
        console.log(`Error in running the server : ${err}`)
    }
    console.log(`Server is running on port : ${port}`);

})