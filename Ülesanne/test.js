import School from './School.js';
import Student from './Student.js';
import Course from './Course.js';

let school = new School("Awesome School");
let student1 = new Student("John Smith");
let student2 = new Student("Mary Lee");

school.addStudent(student1);
school.addStudent(student2);

// We cannot add one student twice
school.addStudent(student1);

console.log(school.getStudents().length);  // 2

let course1 = new Course("Math");
let course2 = new Course("Physics");
school.addCourse(course1);
school.addCourse(course2);

// We cannot add one course twice
school.addCourse(course1);

console.log(school.getCourses().length);  // 2

school.addStudentGrade(student1, course1, 4);
school.addStudentGrade(student1, course2, 5);
school.addStudentGrade(student2, course1, 5);

let student3 = new Student("Cocoo Turner");

// Cannot add grades to the student who is not in the school
school.addStudentGrade(student3, course1, 5);

console.log(student3.getGrades().length);  // 0

school.addStudent(student3);
school.addStudentGrade(student3, course1, 3);
school.addStudentGrade(student3, course2, 5);

console.log(student3.getGrades().length);  // 2

console.log(student3.getGrades());  // [(Math, 3), (Physics, 5)]

console.log(course1.getGrades());  // [(John Smith, 4), (Mary Lee, 5), (Cocoo Turner, 3)]

console.log("Students ordered by average grade:");
console.log("");
console.log(`${'Student'.padEnd(15)}: avg grade`);
console.log("-".repeat(30));

for (let student of school.getStudentsOrderedByAverageGrade()) {
    console.log(`${student.getName().padEnd(15)}: ${student.getAverageGrade() ? student.getAverageGrade().toFixed(2) : 'N/A'}`);
}

console.log();
console.log("Course average grades");

for (let course of school.getCourses()) {
    console.log(`${course.getName().padEnd(10)}: ${course.getAverageGrade() ? course.getAverageGrade().toFixed(2) : 'N/A'}`);
}
