const express = require("express")
const cors = require('cors');


const app = express()
const dotenv = require("dotenv").config()
const connectDb = require('./config/connectionDb')
const PORT = process.env.PORT || 3001
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cors());
connectDb()
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.json({message:"hello"})
// })


app.use('/recipe',require('./routes/recipe'))

app.listen(PORT,(err)=>{
    console.log(`app is listening at port ${PORT}`)
})