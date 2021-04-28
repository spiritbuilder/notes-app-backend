const express = require('express');
const app   = express();
const cors  = require('cors');
const pool= require('./db')

//middle ware
app.use(cors());
app.use(express.json());
//Routes
app.get('/', (req, res)=>{
res.status(200).send("welcome to notes app");
})
//create a note
app.post("./todos", async(req, res)=>{
    try{
            console.log(req.body)
    }catch(err){
            console.log(err)
    }

})
//get all notes



app.listen(5000, ()=>{
    console.log("there is life going on");
})