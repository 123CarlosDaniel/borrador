const express = require('express')
const app = express()


app.get('/', (req,res) => {
    res.json({mesg:'This is cors '})
})

app.listen(4000, () => {
    console.log('Servidor escuchando en http://localhost:4000')
})