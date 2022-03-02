const { getData, saveCourse, getName, getStudents, addNote } = require('../models/teachers.model')

const controller = {}

controller.teacherHome = (req,res) => {
    const id = req.params.id
    getName(id, (err,rows) => {
        if (err) return console.log(err)
        const {name } = rows[0]
        res.render('teachers/teachers_home',{id,name})
    })
}

controller.teacherCourses = (req,res) => {
    const id = req.params.id
    getData( id, (err,rows) => {
        rows.forEach(element => {
            element.teacher = id  
        });
        res.render('teachers/courses',{rows,id})
    })
}

controller.renderAddCourse = (req,res) => {
    const id = req.params.id
    res.render('teachers/add_courses', {id})
}

controller.redirectCourses = (req,res) => {
    const {name, code} = req.body
    const teacher_id = req.params.id
    saveCourse({name,code,teacher_id}, (err) => {
        if (err) return console.log(err)
        res.redirect(`/teachers/courses/${teacher_id}`)
    })
}

controller.renderStudents = (req,res) => {
    const id = req.params.id
    const id_course = req.params.id_course
    getStudents(id_course, (err,rows) =>{
        rows.forEach(el => {
            el.id = id
        })
        res.render('teachers/show_students',{rows,id})
    })
}

controller.renderAddNote = (req,res) => {
    const id = req.params.id
    const id_student = req.params.id_student
    const id_course = req.params.id_course
    res.render('teachers/adding_note',{id_student,id_course,id})
}

controller.addingNote = (req,res) => {
    const {id, id_student,id_course} = req.params
    const grade = req.body.grade
    addNote(id_student,id_course,grade, err => {
        if (err) return console.log(err)
        res.redirect(`/teachers/show_students/${id}/${id_course}`)
    })
}
module.exports = controller