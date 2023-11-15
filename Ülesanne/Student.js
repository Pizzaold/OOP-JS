import Person from './Person.js';

class Student extends Person{
    constructor(person) {
        super(person.name);
        this.grades = []
        this.ID = null
    }
    addGrade(course, grade) {
        const existingCourse = this.grades.find((C) => C.course === course.name);
    
        if (existingCourse) {
            existingCourse.grades.push(grade);
        } else {
            this.grades.push({ course: course.name, grades: [grade] });
        }
    }
    
    setID(ID) {
        if (this.ID === null) {
            this.ID = ID
        } else {
            console.log('ID is already set.')
        }
    }
    getGrades() {
        return this.grades
    }
    getAverageGrade() {
        let sum = 0
        let count = 0
        for (let course of this.grades) {
            for (let grade of course.grades) {
                sum += grade
                count++
            }
        }
        return sum / count
    }
    description() {
        return super.description() + ' Student ID: ' + this.ID
    }
}

export default Student