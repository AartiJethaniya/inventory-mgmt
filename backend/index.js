const express =require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()  

//Midllewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())


//routes
app.get("/",(req,res)=>{
    res.send("Home Page")
})


//connect to db and start server
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT ,() =>{
            console.log(`server is running on port ${PORT}`);
        })
    })
    .catch((err)=>console.log(err))