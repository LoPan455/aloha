require('dotenv').config();
const knex = require('knex')
module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_URL,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    }
}