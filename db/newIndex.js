const { Pool } = require('pg');

const client = new Pool({
  user: 'postgres',
  host: '3.128.91.49',
  // host: 'localhost',
  database: 'sdc',
  port: 5432,
  max: 1000000,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

client.connect();

module.exports = client;

// const query = 'SELECT ratio FROM showcase WHERE showcase_id=9334244';
// client.query(query, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   // console.log(res.rows[0]);
//   // client.end();
// });
