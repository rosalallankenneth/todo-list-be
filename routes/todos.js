const express = require('express');
const router = express.Router();

router.use(logger);

// retrieve all
router.get('/all', (req, res) => {
  res.json({ message: "View All!" });
})

// advanced routing
router.route('/:id')
  .get((req, res) => { // retrieve one
    // console.log({ queryParams: req.query.name }); example of getting query params
    res.json({ message: "Retrieve!", todoId: req.params.todoId });
  })
  .post((req, res) => { // create
    res.json({ message: "Create!", todoId: req.params.todoId });
  })
  .put((req, res) => { // update
    res.json({ message: "Update!", todoId: req.params.todoId });
  })
  .delete((req, res) => { // delete
    res.json({ message: "Delete!", todoId: req.params.todoId });
  })

// middlewares
router.param("id", (req, res, next, id) => {
  req.params.todoId = id;
  next();
})

function logger(req, res, next) {
  console.log({ originalUrl: req.originalUrl });
  next();
}

module.exports = router;