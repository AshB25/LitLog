const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const {
//   rejectUnauthenticated,
// } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:userId', (req, res) => {
  // GET route code here
  // console.log('get all books request');
  // console.log('is authenticated?', req.isAuthenticated());
  // console.log('user', req.user);
  // console.log(req.params);
  const { userId } = req.params;
  console.log(userId);

  const queryText = `SELECT * FROM "goals"
  JOIN "user" ON "user"."id"="goals"."user_id"
  WHERE "user"."id" = $1;`;

  pool
    .query(queryText, [userId])
    .then((result) => {
      console.log('goals get', result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get goals', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   //   // POST route code here
//   console.log('/goals POST route');
//   console.log(req.body);
//   console.log('is authenticated?', req.isAuthenticated());
//   console.log('user', req.user);
//   res.sendStatus(200);
//   console.log(req.body);
//   const queryText = `INSERT INTO "goals" ("book_id", "user_id", "book_title", "number", "chp_pgs", "deadline")
//   VALUES ($1, $2, $3, $4, $5, $6);`;

//   const sqlValues = [
//     1,
//     1,
//     req.body.book_title,
//     req.body.number,
//     req.body.chp_pgs,
//     req.body.deadline,
//   ];

//   pool
//     .query(queryText, sqlValues)
//     .then((result) => {
//       res.sendStatus(201);
//     })
//     .catch((err) => {
//       console.log('server post goals error', err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
