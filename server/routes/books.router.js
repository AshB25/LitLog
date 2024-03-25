const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('in get all books request');
  // GET route code here
  const queryText = `SELECT * FROM "books"
  ORDER BY "author";`;

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all books', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "books" ("title", "author", "pubdate", "pagecount", "cover")
  VALUES ($1, $2, $3, $4, $5);`;

  const { title, author, pubdate, pagecount, cover } = req.body;

  pool
    .query(queryText, [title, author, pubdate, pagecount, cover])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server post books error', err);
      res.sendStatus(500);
    });
});

module.exports = router;
