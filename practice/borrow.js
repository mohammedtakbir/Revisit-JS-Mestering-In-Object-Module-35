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

const person1 = {
    name: 'Takbir',
    age: 24
}
// console.log(person.interview.call(person1))
// console.log(person.increaseAge.apply(person1, [20+25]));
const bind = person.interview.bind(person1)
console.log(bind())
