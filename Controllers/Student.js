const exampleData = require('../data/example')

const getStudentByName = ('/student/:name', (req, res) => {
    exampleData.school.getStudents().forEach(student => {
        if (student.name === req.params.name) {
            res.json({
                ...student,
                age: student.age()
            })
        }
    })
})

const getStudentGrades = ('/student/:name/grades', (req, res) => {
    exampleData.school.getStudents().forEach(student => {
        if (student.name === req.params.name) {
            res.json(student.getGrades())
        }
    })
})

module.exports = studentController = {
    getStudentByName,
    getStudentGrades
}