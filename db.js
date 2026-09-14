const mongoose = require ('mongoose');

//define the mongodb connection url
// const mongoURl='mongodb://localhost:27017/mydatabase'; //replace mydatabase with your database name

const mongoURL='mongodb://localhost:27017/hotels';

//set up the mongodb connection
// mongoose.connect(mongoURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true

// })   //older versions

mongoose.connect(mongoURL);

//get the default connection
//mongoose maintains a default connection object representing the mongodb connection
const db= mongoose.connection;

//define event listeners for database connection

db.on('connected',()=>{
     console.log('connected to mongodb server');
})


db.on('error',(err)=>{
     console.log('mongodb server error',err);
})


db.on('disconnected',()=>{
     console.log('mongodb server is disconnected');
})

///export the database connection
module.exports=db;