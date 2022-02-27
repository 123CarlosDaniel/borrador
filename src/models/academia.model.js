const conn = require('./connection')

const model = {}

//cb recibe como parametro (err,rows)
model.getData = (cb) => {
    conn.query('Select * from schools', cb)
}

model.getCourses = (cb) => {
    conn.query('select s.name as school, s.address,t.id, t.name as teacher,c.name as course,c.code from schools s inner join courses c inner join teachers t on t.id = c.teacher_id and s.id = t.school_id',cb)
}

model.getSchools = (cb) => {
    conn.query('select s.name as school,s.address,s.id, count(c.id) as cantidad_cursos from schools s inner join courses c inner join teachers t on t.id = c.teacher_id and s.id = t.school_id group by s.name;',cb)
}

model.getOnlySchools = (cb) => {
    conn.query('select id,name from schools',cb)
}

model.saveUser = (data,rol,cb) => {
    if(rol == 'option1'){ //teacher
        conn.query('insert into teachers set ?',data,cb)
    }else {     //student
        conn.query('insert into students set ?',data,cb)
    } 
}
model.getSchool =(id,cb) => {
    conn.query('select name from schools where id=?',id,cb)
}
module.exports = model
