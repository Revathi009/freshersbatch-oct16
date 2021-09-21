// require('dotenv').config()
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require("body-parser");
// const cors = require('cors')
// const path = require('path')

// const app = express();

// app.use(express.json())
// app.use(bodyParser.json());
// app.use(cors({origin: 'http://localhost:4200'}))


const express = require("express");
const app = express();
const initRoutes = require("./routes/web");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});