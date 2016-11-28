var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/super_heroes';

// return all super power names
router.get('/', function (req, res) {
  console.log('getting powers');
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM super_powers ORDER BY name ASC')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
});


module.exports = router;
