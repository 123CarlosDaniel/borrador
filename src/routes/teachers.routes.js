const {Router} = require('express')

const router = Router()

const { getall } = require('../controllers/teachers.controller')

router.get('/teachers/home/:id', (req,res) => {
    res.render('teachers/teachers_home')
})

router.get('/teachers/addcourses',(req,res) =>{
    res.send('add course')
})

router.post('/teachers/addcourses',(req,res) =>{
    res.send('add course')
})

module.exports = router