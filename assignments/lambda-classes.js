// CODE here for your Lambda Classes

class Person {
    constructor(personDesc) {
        this.name = personDesc.name;
        this.sex = personDesc.sex;
        this.age = personDesc.age;
        this.city = personDesc.city;
    }

    speak() {
        return `Hi! My name is ${this.name} and I am from ${this.city}.`;
    }
}

class Teacher extends Person {
    constructor(teacherDesc) {
        super(teacherDesc);
        this.proLanguage = teacherDesc.proLanguage;
        this.specialty = teacherDesc.specialty;
        this.topSaying = teacherDesc.topSaying;
    }

    example(subject) {
        return `We will be discussing ${subject} today`;

    }

    grade(student, subject) {
        return `${student.name} has earned a perfect score in this ${subject}!`
    }

    adjustScore(student) {
        let score = Math.round(Math.random() * 100);
        if (student.grade >= 100) {
            student.grade -= score;
            return `${score} points were deducted from ${student.name}'s final score. ${student.name} is currently earning a "${student.grade}" in this course.`;
        }
        else {
            student.grade += score;
            return `${score} points were added to ${student.name}'s final score. ${student.name} is now earning a "${student.grade}".`;
        }
    }
}

class Student extends Person {
    constructor(studentDesc) {
        super(studentDesc);
        this.distantPast = studentDesc.distantPast;
        this.course = studentDesc.course;
        this.bestClass = studentDesc.bestClass;
        this.currGrade = studentDesc.currGrade;
    }

    classSubject() {
        this.bestClass.map(item => console.log(item));
    }

    pullAssignment(subject) {
        return `A pull request in ${subject} was submitted by ${this.name}.`
    }

    test(subject) {
        return `The test has began for ${this.name}. Please be quiet!`;
    }

    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has earned a final grade of ${this.grade}. (S)He will be graduating this year!`;
        }
        else {
            let difference = 70 - this.score;
            this.score += difference;
            return `Despite adding ${difference} points to ${this.name}'s final grade, (s)he did not earn a high enough final grade to graduate.`;
        }
    }
}

class PM extends Person {
    constructor(PMDesc) {
        super(PMDesc);
        this.gradClassName = PMDesc.gradClassName;
        this.bestInstructor = PMDesc.bestInstructor;
    }

    standUp(channel) {
        return `${this.name} makes @chanel announcements to ${channel} daily.`;
    }
    debug(student, subject) {
        return `${student.name}'s ${subject} code was debugged by ${this.name}.`;
    }
}

const Logan = new Teacher({
    name: 'Logan',
    city: 'Orlando',
    sex: 'Male',
    age: 33,
    proLanguage: "Python",
    specialty: "Mathematics",
    topSaying: "Let's get started!"
});

const Dawn = new Teacher({
    name: 'Dawn',
    city: 'Orlando',
    sex: 'Female',
    age: 37,
    proLanguage: "Swift",
    specialty: "Memory management",
    topSaying: "Looking good, Sweetie."
});

const Zariyah = new Student({
    name: 'Zariyah',
    city: 'Dallas',
    sex: 'Female',
    age: 19,
    course: ['Ruby', 'HTML'],
    currGrade: "97"
});

const Avery = new Student({
    name: 'Avery',
    city: 'Charlotte',
    sex: 'Female',
    age: 18,
    course: ["Money Management", "Sales"],
    currGrade: "88"
});

const Zoran = new PM({
    name: 'Zoran',
    city: 'Miami',
    sex: 'Male',
    age: 56,
    gradClassName: "Programming II"
});

const Kenina = new PM({
    name: 'Kenina',
    city: 'Boston',
    sex: 'Female',
    age: 53,
    gradClassName: "Finanacial Management"
});

console.log(Logan.speak());
console.log(Logan.sex);
console.log(Dawn.speak());
console.log(Dawn.topSaying);
console.log(Zariyah.speak());
console.log(Zariyah.course);
console.log(Avery.speak());
console.log(Avery.currGrade);
console.log(Zoran.speak());
console.log(Zoran.age);
console.log(Kenina.speak());
console.log(Kenina.gradClassName)


