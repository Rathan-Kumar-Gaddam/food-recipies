const express = require("express")

const app = express()
const dotenv = require("dotenv").config()
const connectDb = require('./config/connectionDb')
const PORT = process.env.PORT || 3001

connectDb()
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.json({message:"hello"})
// })


app.use('/recipe',require('./routes/recipe'))

app.listen(PORT,(err)=>{
    console.log(`app is listening at port ${PORT}`)
})