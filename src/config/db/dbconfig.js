require('dotenv').config()
// Các thông tin kết nối CSDL
const config = {
    // server: process.env.HOST, // You can use 'localhost\\instance' to connect to named instance
    // user: process.env.USER,
    // password: process.env.PASS,
    // database: process.env.DATABASE,
    // trustServerCertificate: true,

    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

module.exports = config