const mysql = require('mysql')

const host = process.env.MYSQL_HOST || 'localhost',
port = process.env.MYSQL_PORT || 3306 ,
user = process.env.MYSQL_USER || 'root',
password = process.env.MYSQL_PASSWORD || "",
database = process.env.MYSQL_DATABASE || 'schools'

const connection = mysql.createConnection({
    host,
    port ,
    user ,
    password ,
    database 
})

connection.connect( err => {
    if (err) return console.log(err)
    console.log('Connection stablished ',connection.threadId)
})
module.exports = connection
