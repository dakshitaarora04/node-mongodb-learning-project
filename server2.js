const express=require('express');
const app=express();
const db=require('./db');

const Person=require('./models/Person');
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
app.listen(3000,()=>{
    console.log('server is running on port 3000')
}) 