const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user :'root',
    password :'',
    database : 'schools'
})

connection.connect( err => {
    if (err) return console.log(err)
    console.log('Connection stablished ',connection.threadId)
})
module.exports = connection
