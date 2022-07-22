const express = require('express');
const PORT = 3030;

const app = express();

app.use('/', (req, res)=>{
    res.json({ message: "hey there" })
})

app.listen( PORT, ()=>{ console.log(`server running http://localhost:${PORT}`) } )