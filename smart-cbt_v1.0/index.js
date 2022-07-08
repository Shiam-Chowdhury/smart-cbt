const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const question = require('./src/api/routes/questionRoute');
const questionSet = require('./src/api/routes/questionSetRoute');

//to initialize express app
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

//db connection
mongoose.connect('mongodb://localhost:27017/smart-cbt_v1')
    .then(() => {
        console.log('connected to db');
    }).catch(err => console.log(err));

app.use('/question', question);
app.use('/question-set', questionSet);

app.listen(4000, () => {
    console.log('app running on port 4000');
})