require('dotenv').config()
// Các thông tin kết nối CSDL
const config = {
    server: process.env.HOST, // You can use 'localhost\\instance' to connect to named instance
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    trustServerCertificate: true,
}

module.exports = config