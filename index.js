require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// DATABASE CONNECTION
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);

const db = mongoose.connection;

db.on('error', error => console.log({ error }));
db.once('connected', () => console.log('Database Connected'))

// APP DEFAULT MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

// routers
const todosRouter = require('./routes/todos');

// routes
app.use('/todos', todosRouter);

app.listen(4000);