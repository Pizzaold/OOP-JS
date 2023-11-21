const express = require('express')
const router = express.Router()
const courseController = require('../Controllers/Course')

router.get('/:name', courseController.getCourseByName)

module.exports = router