// const { response } = require('express');
const express = require('express');
const client = require('../db/newIndex');

const showcase = express.Router();

showcase.get('/api/showcase', (req, res) => {
  client.query('SELECT * FROM showcase WHERE ratio=1', (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(response.rows);
    res.status(200).send(response);
  });
});

showcase.get('/api/showcase/:id', (req, res) => {
  const { id } = req.params;
  client.query(`SELECT * FROM showcase WHERE id=${id}`, (err, response) => {
    if (err) {
      console.log(err);
      // return;
    } else {
      res.status(200).send(response);
    }
  });
});

showcase.post('/api/showcase/:attractionId', (req, res) => {
  const { form } = req.body;
  const { attractionId } = req.params;
  const obj = { attractionId, ...form };
  client.query(`INSERT INTO improveForm (attraction_id, description, isOpen, suggestedDuration, address) VALUES (${obj})`, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(response);
    }
  });
});

module.exports = showcase;
