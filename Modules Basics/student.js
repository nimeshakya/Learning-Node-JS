class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hi I'm ${this.name} and I am ${this.age} years old.`;
    }
}

class Teacher extends Student {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teacherGreet() {
        return `Hello! I'm ${this.name}, I am ${this.age} years old and I teach ${this.subject}`;
    }
}

module.exports = { Student, Teacher };
// exports is an object
// Using ES6 syntax replacing {Student:Student, Teacher:Teacher}
