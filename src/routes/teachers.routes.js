const {Router} = require('express')

const router = Router()

const { teacherHome, teacherCourses, renderAddCourse, redirectCourses, renderStudents, renderAddNote, addingNote } = require('../controllers/teachers.controller')
const { isAuthenticated } = require('../helpers/auth')

router.get('/teachers/home/:id', isAuthenticated, teacherHome)

router.get('/teachers/courses/:id',isAuthenticated ,teacherCourses)

router.get('/teachers/add_courses/:id', isAuthenticated, renderAddCourse)

router.post('/teachers/add_courses/:id',isAuthenticated, redirectCourses )

router.get('/teachers/show_students/:id/:id_course',isAuthenticated ,renderStudents)

router.get('/teachers/addNote/:id/:id_student/:id_course', isAuthenticated,renderAddNote)

router.post('/teachers/addNote/:id/:id_student/:id_course',isAuthenticated, addingNote)
module.exports = router