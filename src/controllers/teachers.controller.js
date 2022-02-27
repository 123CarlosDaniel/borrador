const { getData } = require('../models/teachers.model')

const controller = {}

controller.getall = (req,res) => {
    const id = req.params.teacher_id
    getData( id,( err, rows) => {
        if (err) return console.log(err)
        console.log(rows)
    })
    res.render('index')
}

module.exports = controller