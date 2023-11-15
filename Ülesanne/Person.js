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

export default Person