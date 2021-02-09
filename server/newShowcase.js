// const { response } = require('express');
const express = require('express');
const client = require('../db/newIndex');

const showcase = express.Router();

showcase.get('/api/showcase', (req, res) => {
  // client.query('SELECT * FROM showcase WHERE ratio=1 LIMIT 10', (err, response) => {
  client.query(`
  SELECT * 
  FROM showcase 
  JOIN pictures ON (showcase.showcase_id = pictures.showcase_id)
  WHERE ratio=1 LIMIT 10`,
  (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      client.query(`
      SELECT pic
      FROM pictures
      WHERE showcase_id=${response.rows[1].showcase_id}`,
      (error, pictures) => {
        if (error) {
          res.status(400).send(error);
        } else {
          const showcasesAndPics = [];
          showcasesAndPics.push(response.rows, pictures.rows);
          res.status(200).send(showcasesAndPics);
        }
      });
    }
  });
});

showcase.get('/api/showcase/:id', (req, res) => {
  const { id } = req.params;
  client.query(`SELECT * FROM showcase WHERE showcase_id=${id}`, (err, response) => {
    if (err) {
      res.status(400).send(err);
      // console.log(err);
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
      res.status(400).send(err);
      // console.log(err);
    } else {
      res.status(200).send(response);
    }
  });
});

module.exports = showcase;
