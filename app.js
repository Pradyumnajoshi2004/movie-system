const movieScreenRoute = require("./route/movieScreenRoute")
const movieNameRoute = require("./route/movieNameRoute")
const movieUserRoute = require("./route/movieUserRoute")
const express = require("express")
require("dotenv/config")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())

// middleware
app.use(express.json())

// routes 
app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/movieuser",movieUserRoute)
app.use("/api/moviescreen",movieScreenRoute)
app.use("/api/moviename",movieNameRoute)

// data connections 
app.listen(process.env.PORT || 5000)

// db 

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error);
        
    }
}
db()