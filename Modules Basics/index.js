const People = require('./student');

const student1 = new People.Student('maya', 17);
console.log(student1.greeting());

const teacher1 = new People.Teacher('susan', 34, 'english');
console.log(teacher1.teacherGreet());
