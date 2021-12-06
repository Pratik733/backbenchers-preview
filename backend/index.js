const express = require('express')
const mongoose = require('mongoose')

const app = express();
const article = require('./routes/article')

require("dotenv").config();

const mongoDB = process.env.MONGO_URL_LOCAL
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '))
db.once("open", () => console.log("connection to db established"));

app.use(express.json())

const usersRouter = require("./routes/users");
app.use("/users", usersRouter)

app.listen(8082, () => {
    console.log('example started at http://localhost:8082 ');
})