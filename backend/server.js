const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const connects = require("./db/config")
const user= require("./routes/userRoutes")
const cors = require("cors");
const app = express();

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())



app.listen(9000, ()=>{
    connects()
    console.log("Server is running on PORT 9000")
})

app.use(user)
