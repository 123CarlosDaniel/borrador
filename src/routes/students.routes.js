const {Router} = require('express')
const { studentHome, renderCourses, signCourse, getMyCourses } = require('../controllers/students.controller')
const router = Router()
const {isAuthenticated} = require('../helpers/auth')

router.get('/students/home/:id',isAuthenticated , studentHome)

router.get('/students/courses/:id',isAuthenticated, renderCourses )

router.get('/students/sign_course/:id/:id_course', isAuthenticated , signCourse)

router.get('/students/mycourses/:id',isAuthenticated,getMyCourses)
module.exports = router
