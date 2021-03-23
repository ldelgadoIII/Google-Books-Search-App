const router = require("express").Router();
const db = require("../models");

router.get("/api/books", (req, res) => {
  db.Book.find({})
    .then(book => res.json(book))
    .catch(err => res.status(422).end());
});

router.post("/api/books", (req, res) => {
  db.Book.create(req.body)
    .then(book => res.json(book))
    .catch(err => res.status(422).end());
});

// add delete route
router.post("/api/books/:id", (req, res) => {
  db.Book.delete(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(422).end());
});

module.exports = router;
