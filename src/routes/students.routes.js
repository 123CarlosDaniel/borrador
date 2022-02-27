const {Router} = require('express')
const router = Router()

router.get('/students/home/:id',(req,res) => {
    res.render('students/students_home')
})

module.exports = router
