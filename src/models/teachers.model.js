const conn = require('./connection')

const teacherModel = {}
teacherModel.getName = (teacher_id,cb) => {
    conn.query('select name from teachers where id = ?',teacher_id,cb)
}

teacherModel.getData = (teacher_id,cb) => {
    conn.query('Select * from courses where teacher_id =?',teacher_id ,cb)
}

teacherModel.saveCourse = (data,cb) => {
    conn.query(' insert into courses set ?', data, cb)
}

teacherModel.getStudents = (id_course, cb) => {
    conn.query('select s.name,s.email,s.id as id_student,g.grade,g.id_course from students s,grades g where s.id in (select id_student from grades where id_course = ? ) and g.id_student = s.id and g.id_course = ? ',[id_course,id_course],cb)
}
teacherModel.addNote = (id_student,id_course,grade,cb) => {
    conn.query('update grades set grade =? where id_course=? and id_student=?',[grade,id_course,id_student],cb)
}
module.exports = teacherModel