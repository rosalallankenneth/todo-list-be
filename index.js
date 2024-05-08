const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

// routers
const todosRouter = require('./routes/todos');

// routes
app.use('/todos', todosRouter);

app.listen(4000);