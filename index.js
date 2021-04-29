const express = require('express');
const app   = express();
const cors  = require('cors');
const pool = require("./db");
PORT = process.env.PORT || 5000;

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
        const { title, description, created_by, notetype } = req.body;
        const note = await pool.query(
          "INSERT INTO notes (title, description, created, last_updated, created_by, notetype) VALUES ( $1,$2,now(),now(), $3, $4 ) returning*;",
          [title, description, created_by, notetype]
        );
        res.status(200).json({ message: "new note added", note: note });
    }catch(err){
             res.json(err);
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


app.listen(PORT, () => {
  console.log("there is life going on");
});