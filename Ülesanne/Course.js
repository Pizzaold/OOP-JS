class Course {
    constructor(name) {
        this.name = name
        this.students = []
    }
    addGrade(student, grade) {
        this.students.push({student, grade})
    }
    getName() {
        return this.name
    }
    getGrades() {
        return this.students
    }
    getAverageGrade() {

    }
    description() {
        return this.name + ' has ' + this.students.length + ' students.'
    }
}

export default Course