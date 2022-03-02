require('dotenv').config()

const app = require('./server')
require('../db/user.db')

app.listen(app.get('port'), () => {
    console.log(`Aplicacion corriendo en http://localhost:${app.get('port')}`)
})