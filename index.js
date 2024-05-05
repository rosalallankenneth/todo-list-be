const express = require('express');
const app = express();

// routers
const todosRouter = require('./routes/todos');

app.get('/', (req, res) => {
  res.json({ message: "It works!" });
  // res.download("index.js");
  // res.status(500).send("test");
  // res.sendStatus(500);
  // res.send("test");
})

app.use('/todos', todosRouter);

app.listen(4000);