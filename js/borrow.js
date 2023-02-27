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

const person2 = {
    name: 'hossain',
    age: 25
};
// const res = person.interview.call(person2);
// const res = person.increaseAge.call(person2, 30); //? call()
// const res = person.increaseAge.bind(person2, 15); //? bind()
// const result = res();
const res = person.increaseAge.apply(person2, [100]); //? apply()
console.log(res)