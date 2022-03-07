require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
})

module.exports = {
  query: function(text, values, cb) {
     pool.connect(function(err, client, done) {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      client.query(text, values, function(err, result) {
        done();
        cb(err, result);
       })
     });
  }
}