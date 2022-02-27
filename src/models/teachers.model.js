const conn = require('./connection')

const teacherModel = {}

teacherModel.getData = (teacher_id,cb) => {
    conn.query('Select * from courses where teacher_id =?',teacher_id ,cb)
}

module.exports = teacherModel