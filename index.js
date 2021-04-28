const express = require('express');
const app   = express();
const cors  = require('cors');

//middle ware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
res.status(200).send("welcome to notes app");
})

app.listen(5000, ()=>{
    console.log("there is life going on");
})