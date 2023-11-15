class Course {
    constructor(name) {
        this.name = name
        this.students = []
    }
    addGrade(student, grade) {
        const existingStudent = this.students.find((S) => S.student === student.name);
    
        if (existingStudent) {
            existingStudent.grades.push(grade);
        } else {
            this.students.push({ student: student.name, grades: [grade] });
        }
    }
    getName() {
        return this.name
    }
    getGrades() {
        return this.students
    }
    getAverageGrade() {
        let sum = 0
        let count = 0
        for (let student of this.students) {
            for (let grade of student.grades) {
                sum += grade
                count++
            }
        }
        return sum / count
    }
    description() {
        return this.name + ' has ' + this.students.length + ' students.'
    }
}

export default Course