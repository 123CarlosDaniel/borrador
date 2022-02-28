const express = require('express')
const path = require('path')
const {create} = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
const morgan = require('morgan')
const passport = require('passport')
require('./config/passport')
//Initializations
const app = express()

//settings
app.set('views', path.join(__dirname,'views'))

app.engine('.hbs', create({
    defaultLayout : 'main',
    layoutsDir : path.join(app.get('views'),'layouts'),
    partialsDir : path.join(app.get('views'),'partials'),
    extname : '.hbs'
}).engine
)

app.set('view engine','.hbs')
//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret :'secret',
    resave:true,
    saveUninitialized :true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// gloabl variables 
app.use( (req,res,next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null
    next()
})


//routes
app.use( require('./routes/main.routes'));
app.use( require('./routes/teachers.routes'));
app.use( require('./routes/students.routes'));
app.use( require('./routes/users.routes'))
//static files
app.use(express.static(path.join(__dirname,'public')))
module.exports = app