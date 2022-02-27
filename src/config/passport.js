const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const UserModel = require('../models/users.model')

passport.use( new LocalStrategy({
    usernameField :'email',
    passwordField : 'password' 
}, async (email,password,done) => {
    const user = UserModel.findOne({ email :email})
    if (!user) {
        return done(null,false,{
            message :'Usuario no existe'
        })
    } else {
        const match = await user.matchPassword(password)
        if (match) {
            return done(null , user)
        } else {
            return done(null,false, {
                message :'Contraseña incorrecta'
            })
        }
    }
}))

passport.serializeUser( (user, done) => {
    done(null,user.id)
})

passport.deserializeUser( (id,done) => {
    UserModel.findById( id, (err,user) => {
        done(err,user)
    })
})