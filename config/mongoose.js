// require the library
const mongoose = require('mongoose');


// connect to the database
mongoose.connect('mongodb://localhost/codial');

// acquire the connection (to check if it is successfull)
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,'error conneting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("Sucessfully connected to the database");
})