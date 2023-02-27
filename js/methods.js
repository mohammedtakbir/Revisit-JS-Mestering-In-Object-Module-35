const person = {
    name: 'Mohammed',
    age: 23,
    profession: 'Software Engineer',
    interview: function () {
        return `${this.name} is preparing for the next interview`
    },
    improveInterview: function (tech) {
        const interview = this.interview();
        return `${interview}, specially on ${tech}`;
    },
    increaseAge: function (age) {
        this.age = this.age + age;
        return this.age;
    }
};
console.log(person.improveInterview('Next.js'));
console.log(person.increaseAge(4));
console.log(person.increaseAge(5));
console.log(person.increaseAge(15));
console.log(person.increaseAge(25));
console.log(person);