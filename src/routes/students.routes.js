const {Router} = require('express')
const router = Router()
const {isAuthenticated} = require('../helpers/auth')

router.get('/students/home',isAuthenticated ,(req,res) => {
    res.render('students/students_home')
})

module.exports = router
