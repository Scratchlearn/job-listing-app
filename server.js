const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//creating express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));








const PORT = process.env.PORT||5000
app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`);
})