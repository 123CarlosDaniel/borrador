const conn = require('./connection')

const model = {}

model.getIdSchool = (idStudent, cb) => {
    conn.query('select school_id from students where id= ?',idStudent,cb)
}
model.getCourses = (idStudent,idSchool,cb) => {
    conn.query('select c.name as course,c.code, c.id ,t.name as teacher, s.address from courses c inner join teachers t inner join schools s on c.teacher_id =t.id and ? = t.school_id where c.id not in (select x.id_course from courses_x_students x where x.id_student =?) group by c.id',[idSchool,idStudent] ,cb)
}

model.registCourse = (data, cb) => {
    conn.query('insert into courses_x_students set ?',data,cb )
}

model.registData = (data,cb) => {
    conn.query('insert into grades set ?', data,cb)
}

model.getOwnCourses = (idStudent, cb) => {
    conn.query('select c.name as course,c.code,c.id,teachers.name as teacher,grades.grade from courses c,teachers,grades where c.id in (select id_course from courses_x_students where id_student =?) and c.teacher_id = teachers.id and c.id=grades.id_course and grades.id_student =?', [idStudent,idStudent],cb)
}
module.exports = model