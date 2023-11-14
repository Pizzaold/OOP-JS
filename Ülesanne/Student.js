class Person {
    constructor(name) {
        this.name = name
    }
    setDataOfBirth(year) {
        this.year = year
    }
    getDateOfBirth() {
        return this.year
    }
    age() {
        return new Date().getFullYear() - this.year
    }
    getName() {
        return this.name
    }
    description() {
        return this.name + ' is ' + this.age() + ' years old.'
    }
}

class Student extends Person {
    constructor(name) {
        super(name)
        this.grades = []
        this.ID = null
    }
    addGrade(course, grade) {
        this.grades.push({course, grade})
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

    }
    description() {
        return super.description() + ' Student ID: ' + this.ID
    }
}

export default Student