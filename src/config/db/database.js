const dotenv = require('dotenv');
const { Pool } = require('pg')

dotenv.config();
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString,
})

pool.on('connect', () => {
    console.log("Connect sucessfully");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
