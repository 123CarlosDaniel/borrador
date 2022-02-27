const { getData, getCourses, getSchools, getOnlySchools, saveUser, getSchool } = require('../models/academia.model')
const User = require('../models/users.model')
const controller = {}

controller.getall = (req,res) => {
    getData( ( err, rows) => {
        if (err) return console.log(err)
        // console.log(rows[0])
    })
    res.render('index')
}

controller.renderAbout = (req ,res) => {
    res.render('about')
}

controller.getallCourses = (req,res) => {
    getCourses( (err,rows) => {
        if (err) return console.log(err)
        // console.log(rows)
        res.render('courses',{rows})
    })
}
controller.getallSchools = (req,res) => {
    getSchools( (err,rows) => {
        if (err) return console.log(err)
        // console.log(rows)
        res.render('schools',{rows})
    })
}
controller.renderRegister = (req,res) => {
    res.render('newSchool')
}

controller.renderSignUp = (req,res) => {
    getOnlySchools( (err,rows) => {
        if (err) return console.log(err)
        res.render('signup',{rows})
    })
}
controller.signup = async(req,res) => {
    // console.log(req.body)
    
    const errors = []
    const {name,rol,school_id,email,password,confirm_password} = req.body
    if (password!=confirm_password) errors.push({text :'Las contraseñas no coinciden'}) 
    if (password.length <4) errors.push({text :'La contraseña debe tener al menos 4 caracteres'})
    if(errors.length > 0) {
        getOnlySchools( (err,rows) => {
            res.render('signup', {
                errors,
                name,
                email,
                rows
            }) 
        })
    }
    else{
        const emailUser = await User.findOne({email:email})
        console.log(emailUser)
        if(emailUser){
            req.flash('error_msg','El email esta siendo usado, ingresa otro')
            res.redirect('/signup')
        } else{
            const newUser = await new User({email,password,rol})
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save()
            saveUser({name,email,school_id},rol, (err) =>{
                if (err) return console.log(err);
                getSchool(school_id, (err,rows) => {       
                    const school_name = rows[0].name
                    if (rol =='option1') res.render('users/teacher',{name,school_name})
                    else{
                        res.render('users/student',{name,school_name})
                    }
                })
        })
        }
    }
}

controller.renderSignin = (req,res) => {
    res.render('signin')
}

controller.login = async(req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email})   
    if (!user) {
        req.flash('error_msg','No se encontro ningun usuario con este email')
        return res.redirect('/signin')
    }
    const value =await user.matchPassword(password)
    if(!value) {
        req.flash('error_msg','Contraseña o email incorrecto')
        return res.redirect('/signin')
    }
    else {
        if (user.rol =='option1') return res.redirect(`/teachers/home/${user.id}`)
        if (user.rol =='option2') return res.redirect(`/students/home/${user.id}`)
    }
}
module.exports = controller