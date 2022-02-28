const User = require('../models/users.model')
const controller = {}

controller.redirectUser = (req,res) => {
    if( req.user.rol =='option1') return res.redirect(`/teachers/home`)
    if( req.user.rol =='option2') return res.redirect(`/students/home`)
    
}

module.exports = controller