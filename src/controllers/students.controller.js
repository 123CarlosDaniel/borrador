const { getCourses, getIdSchool, registCourse, getOwnCourses, registData } = require("../models/students.model")

const controller = {}

controller.studentHome = (req,res) => {
    const id = req.params.id
    res.render('students/students_home',{id})
}

controller.renderCourses = (req,res) => {
    const idStudent = req.params.id
    const id = req.params.id
    getIdSchool(idStudent, (err,rows) => {
        if (err) return console.log(err)
        const schoolId =rows[0].school_id
        getCourses(idStudent,schoolId, (err,rows) => {
            if (err) return console.log(err)
            rows.forEach(element => {
                element.idStudent =idStudent    
            });
            res.render('students/students_courses',{ rows,id})
        })
    })
}

controller.signCourse = (req,res) => {
    const id_student = req.params.id
    const id_course = req.params.id_course
    registData({id_course,id_student}, err => {
        if (err) return console.log(err)
    })
    registCourse({id_student,id_course}, err => {
        if (err) return console.log(err)
        req.flash('success_msg','Te has registrado satisfactoriamente' )
        res.redirect(`/students/courses/${id_student}`)
    })
}

controller.getMyCourses = (req,res) => {
    const id = req.params.id
    getOwnCourses(id , (err, rows) => {
        console.log(rows)
        res.render('students/students_own_courses',{rows,id})
    })
}
module.exports = controller

