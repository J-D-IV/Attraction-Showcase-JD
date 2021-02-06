const express = require('express');
const client = require('../db/newIndex');

const showcase = express.Router();

showcase.get('/api/showcase', (req, res) => {
  client.query('SELECT ratio FROM showcase WHERE showcase_id=9334244', (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(response.rows);
    res.status(200).send(response);
  });
});

module.exports = showcase;
