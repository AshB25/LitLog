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
  console.log('get goal router', userId);

  // const queryText = `SELECT * FROM "goals"
  // JOIN "user" ON "user"."id"="goals"."user_id"
  // WHERE "user"."id" = $1;`;

  const queryText = `SELECT "goals".book_title, "goals".number, "goals".chp_pgs, "goals".deadline FROM "goals"
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
router.post('/', (req, res) => {
  //   // POST route code here
  console.log('goals POST route');
  console.log('post goal', req.body);

  const queryText = `INSERT INTO "goals" ("user_id", "book_title", "number", "chp_pgs", "deadline")
  VALUES ($1, $2, $3, $4, $5);`;

  const sqlValues = [
    req.body.userId,
    req.body.newGoal.book_title,
    req.body.newGoal.number,
    req.body.newGoal.chp_pgs,
    req.body.newGoal.deadline,
  ];

  console.log('goals post route', req.body);
  console.log('goals post', sqlValues);
  console.log('new goal post', req.body.newGoal);

  pool
    .query(queryText, sqlValues)
    .then((result) => {
      console.log('new goal add');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server post goals error', err);
      res.sendStatus(500);
    });
});

module.exports = router;
