const express = require('express')
const router = express.Router()
const studentController = require('../Controllers/Student')

router.get('/:name', studentController.getStudentByName)
router.get('/:name/grades', studentController.getStudentGrades)

module.exports = router