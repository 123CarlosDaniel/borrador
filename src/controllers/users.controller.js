const { getIdTeacher, getIdStudent } = require('../models/academia.model')
const User = require('../models/users.model')
const controller = {}

controller.redirectUser = (req,res) => {
    if( req.user.rol =='option1') {
        getIdTeacher(req.user.email, (err,rows) => {
            const id = rows[0].id
            return res.redirect(`/teachers/home/${id}`)
        })
    }
    if( req.user.rol =='option2') {
        getIdStudent(req.user.email, (err,rows) => {
            const id = rows[0].id
            return res.redirect(`/students/home/${id}`)
        })
    }
    
}

module.exports = controller