const mongoose = require('mongoose')

const MONGODB_URI= process.env.MONGODB_URI || "mongodb://localhost/usuarios"
mongoose.connect(MONGODB_URI , {
    useUnifiedTopology : true,
    useNewUrlParser : true,
} )
    .then( db => console.log('Database is connected'))
    .catch(err => console.log(err))