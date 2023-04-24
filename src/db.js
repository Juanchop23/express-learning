//Se le dice al archivo que voy a estar usando el módulo mysql2
//usando promesas
const mysql = require('mysql2/promise')

async function connectDB() {
//Recordar las promesas
const connection = await mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'kn62czelxojtdjser46s',
    password: 'pscale_pw_UqJj9ZBU4xx0X9w2VpMmrVHHmibPN9el593UoT0EkDm',
    database: 'expressmysql',
    ssl: {
        rejectUnauthorized: false
    }
})

const result = await connection.query('SELECT 1 + 1 AS RESULT')
console.log(result)
}

module.exports = connectDB