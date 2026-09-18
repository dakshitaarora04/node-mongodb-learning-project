const express=require('express');
const app=express();
const db=require('./db');

const bodyParser = require ('body-parser');
app.use(bodyParser.json()); //parse the json data given in postman for now
//and return the req.body as a json object

const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');

app.get('/',function(req,res){
    res.send('welcome to my hotel.. how can I help you');
})
// app.get('/chicken',(req,res)=>{
//     res.send('sure sir,i would love to serve chicken')
// })
// app.get('/idli',(req,res)=>{
//     var customized_idli={
//         name:'rava idli',
//         size:'10 cm diameter',
//         is_sambar:true,
//         is_chutney:false
//     }
//     res.send(customized_idli)
// })
app.post('/person', async (req,res)=>{
    // const data = req.body //assuming that request body contains the person

    // //create a person document using the mongoose model
    // const newPerson=new Person();
    // newPerson.name=data.name;
    // newPerson.age=data.age;
    // newPerson.work=data.work;
    // newPerson.mobile=data.mobile;
    // newPerson.email=data.email;
    // newPerson.address=data.address;
    // newPerson.salary=data.salary; Prefilled
    // newPerson.save((error,savedperson)=>{
    //     if(error){
    //         console.log('Error saving person',error);
    //         res.status(500).json({error:'Internal server error'});
    //     }else{
    //         console.log('data saved successfully');
    //         res.status(200).json(savedPerson);
    //     }
    // })

    try{

        const data=req.body

        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }

    catch(err){
        console.log(err);
        res.status(500).json({
            error:'Internal Server Error'});
        }
        })


//get method for person data

app.get('/person',async(req,res)=>{
    try{
        const data= await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({
        error:'Internal Server Error'});
    }
})


app.post('/menuitem', async(req,res)=>{
    try{
        const data= req.body

        const newMenuItem=new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);

    }
    catch(err){
    console.log(err);
        res.status(500).json({
        error:'Internal Server Error'});

    }
})


app.get('/menuitem',async(req,res)=>{
    try{
        const data= await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({
        error:'Internal Server Error'});
    }
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
}) 