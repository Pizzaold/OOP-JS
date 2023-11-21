const exampleData = require('../data/example')

const getSchoolByName = ('/school/:name', (req, res) => {
    if (req.params.name === exampleData.school.name) {
        res.json(exampleData.school)
    }
})

const getSchoolStudents = ('/school/:name/students', (req, res) => {
    if (req.params.name === exampleData.school.name) {
        res.json(exampleData.school.getStudents())
    }
})

const getSchoolCourses = ('/school/:name/courses', (req, res) => {
    if (req.params.name === exampleData.school.name) {
        res.json(exampleData.school.getCourses())
    }
})

module.exports = schoolController = {
    getSchoolByName,
    getSchoolStudents,
    getSchoolCourses
}