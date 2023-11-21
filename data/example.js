const Student = require('../Classes/Student')
const Course = require('../Classes/Course')
const School = require('../Classes/School')

const school = new School("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)

school.addStudent(student1)

const course1 = new Course("Math")
const course2 = new Course("Physics")

school.addCourse(course1)
school.addCourse(course2)

school.addCourse(course1)

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course2, 5)
school.addStudentGrade(student2, course1, 5)

const student3 = new Student("Cocoo Turner")
student3.setDateOfBirth(2000)

school.addStudentGrade(student3, course1, 5)

school.addStudent(student3)
school.addStudentGrade(student3, course1, 3)
school.addStudentGrade(student3, course2, 5)

module.exports = {
    school
}