const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sdc',
  port: 5432,
});

client.connect();
const query = 'SELECT ratio FROM showcase WHERE showcase_id=9334244';
client.query(query, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(res.rows[0]);
  // client.end();
});

module.exports = client;
