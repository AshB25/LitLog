const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:userID', (req, res) => {
  console.log('in get all books request');
  // GET route code here
  const { userID } = req.params;
  console.log(userID);

  const queryText = `SELECT * FROM "books"
  JOIN "user" ON "user"."id"="books"."user_id"
  WHERE "user"."id" = $1
  ORDER BY "author";`;

  pool
    .query(queryText, [userID])
    .then((result) => {
      console.log('books get', result.rows);
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
  // const { userID } = req.params;
  console.log('POST');

  const queryText = `INSERT INTO "books" ("title", "author", "pubdate", "pagecount", "cover")
  VALUES ($1, $2, $3, $4, $5);`;

  const sqlValues = [
    req.body.title,
    req.body.author,
    req.body.pubdate,
    req.body.pagecount,
    req.body.cover,
  ];

  pool
    .query(queryText, sqlValues)
    .then((result) => {
      console.log('New book add');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server post books error', err);
      res.sendStatus(500);
    });
});

module.exports = router;
