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
app.post("/notes", async(req, res)=>{
    try{
            const note  = await pool.query('insert into notes()')
    }catch(err){
            console.log(err)
    }

})
//get all notes
app.get("/notes", async(req,res)=>{
    try {
        const allnotes = await pool.query('select * from notes');
    res.json(allnotes)
    } catch (error) {
        console.log(error.message)
    }
    
})

//get specific note
app.get('/notes/:id', async(req, res)=>{
try {
    const id = req.params
    const note = await pool.query('select * from notes where id =$1',[id]);
    res.json(note)
} catch (error) {
    console.log(error)
}
})


app.listen(5000, ()=>{
    console.log("there is life going on");
})