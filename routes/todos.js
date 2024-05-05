const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "View All!" });
})

router.get('/view/:id', (req, res) => {
  res.json({ message: "View!" });
})

router.post('/create', (req, res) => {
  res.json({ message: "Create!" });
})

router.post('/update/:id', (req, res) => {
  res.json({ message: "Update!" });
})

router.post('/delete/:id', (req, res) => {
  res.json({ message: "Delete!" });
})

module.exports = router;