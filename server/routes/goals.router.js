const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:userId', (req, res) => {
  // GET route code here
  const { userId } = req.params;
  console.log(userId);

  const queryText = `SELECT * FROM "goals"
  JOIN "user" ON "user"."id"="goals"."user_id"
  WHERE "user"."id" = $1;`;

  pool
    .query(queryText, [userId])
    .then((result) => {
      console.log(result.rows);
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
  // POST route code here
  const queryText = `INSERT INTO "goals" ("book_title", "number", "chp_pgs", "deadline")
  VALUES ($1, $2, $3, $4);`;

  const sqlValues = [
    req.body.book_title,
    req.body.number,
    req.body.chp_pgs,
    req.body.deadline,
  ];

  pool
    .query(queryText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('server post goals error', err);
      res.sendStatus(500);
    });
});

module.exports = router;
