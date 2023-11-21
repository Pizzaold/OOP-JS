const express = require('express')
const app = express()

const course = require('./Routers/Course')
const student = require('./Routers/Student')
const school = require('./Routers/School')

app.use('/student', student)
app.use('/course', course)
app.use('/school', school)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})