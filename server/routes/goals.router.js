const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {
//   GET route code here
//   console.log('get goals request');

//   const queryText = `SELECT "goals".book_title, "goals".number, "goals".chp_pgs, "goals".deadline FROM "books"
//   JOIN "goals" ON "books"."id"="goals"."book_id"
//   JOIN "user" ON "user"."id"="goals"."user_id"
//   WHERE "book_id" = $1;`;

//   pool
//     .query(queryText)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((err) => {
//       console.log('ERROR: Get goals', err);
//       res.sendStatus(500);
//     });
// });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const queryText = `INSERT INTO "goals" ("book_title", "number", "chp_pgs", "deadline")
  VALUES ($1, $2, $3, $4);`;

  const { book_title, number, chp_pgs, deadline } = req.body;

  pool
    .query(queryText, [req.body])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server post goals error', err);
      res.sendStatus(500);
    });
});

module.exports = router;
