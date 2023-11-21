const exampleData = require('../data/example')

const getCourseByName = ('/course/:name', (req, res) => {
    exampleData.school.getCourses().forEach(course => {
        if (course.name === req.params.name) {
            res.json(course)
        }
    })
})

module.exports = courseController = {
    getCourseByName
}