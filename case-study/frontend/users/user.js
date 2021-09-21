require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')
const path = require('path')

const app = express();

app.use(express.json())
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}))

app.use('/api', require("./userRouter"));

//database connection
const URI = process.env.MONGO_URL
mongoose.connect(URI, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})
