const app = require('./server')
require('../db/user.db')

app.listen(3000, () => {
    console.log('Aplicacion corriendo en http://localhost:3000')
})