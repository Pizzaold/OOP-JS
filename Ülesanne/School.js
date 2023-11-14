class School {
    constructor(name) {
        this.name = name
        this.courses = []
        this.students = []
    }
    addCourse(course) {
        if (this.courses.includes(course)) {
            console.log('Course is already added.')
            return
        } 
        this.courses.push(course)
    }
    addStudent(student) {
        if (this.students.includes(student)) {
            console.log('Student is already added.')
            return
        }
        this.students.push(student)
    }
    addStudentGrade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.addGrade(course, grade)
            course.addGrade(student, grade)
        }
    }
    getStudents() {
        return this.students
    }
    getCourses() {
        return this.courses
    }
    getStudentsOrderedByAverageGrade() {
        return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade())
    }
}

export default School