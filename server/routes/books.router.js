const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const {
//   rejectUnauthenticated,
// } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:userID', (req, res) => {
  // GET route code here
  console.log('get all books request');
  // console.log('is authenticated?', req.isAuthenticated());
  // console.log('user', req.user);
  // console.log(req.params);
  const { userID } = req.params;
  console.log(userID);

  const queryText = `SELECT * FROM "books"
  JOIN "user" ON "user"."id"="books"."user_id"
  WHERE "user"."id" = $1
  ORDER BY "author";`;

  // const queryText = `SELECT * FROM "books" WHERE "user_id" = $1;`;

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
  // console.log('is authenticated?', req.isAuthenticated());
  // console.log('user', req.user);
  // console.log(req.params);

  const queryText = `INSERT INTO "books" ("title", "author", "pubdate", "pagecount", "cover", "user_id")
  VALUES ($1, $2, $3, $4, $5);`;

  const sqlValues = [
    req.body.title,
    req.body.author,
    req.body.pubdate,
    req.body.pagecount,
    req.body.cover,
  ];

  pool
    .query(queryText, sqlValues, [req.user.id])
    .then((result) => {
      console.log('New book add');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server post books error', err);
      res.sendStatus(500);
    });
});

// router.delete('/', (req, res) => {
//   console.log('Delete book', req.body);
//   // const { id } = req.params;
//   const queryText = `DELETE FROM "books"
//                     WHERE "user_id" = $1;`;
//   // const sqlValues = [id];

//   pool
//     .query(queryText)
//     .then((results) => {
//       res.sendStatus(201);
//     })
//     .catch((err) => {
//       console.log('remove book error', err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
