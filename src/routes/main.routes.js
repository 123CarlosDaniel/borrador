const {Router} = require('express')
const router = Router()
const { getall, renderAbout, getallCourses, getallSchools, renderRegister, renderSignUp, signup, renderSignin, login, logout, registerSchool} = require('../controllers/main.controller')

router.get('/', getall)
router.get('/about', renderAbout)
router.get('/courses',getallCourses )
router.get('/schools',getallSchools)
router.get('/registernew',renderRegister)

router.post('/registernew', registerSchool)
router.get('/signup',renderSignUp)
router.post('/signup', signup)
router.get('/signin',renderSignin)
router.post('/signin', login)
router.get('/logout', logout)
module.exports = router