//* 5 ways ot create object
//* 1. object literals
const obj = {
    firstName: 'Mohammed',
    age: 23,
    profession: 'Software Engineer',
    activities: function () { //? when you create a function inside an object, then it's called method
        console.log(`${this.firstName} is working on chatGPT project to improve better search result`)
    }
};
// console.log(obj);
// obj.activities();

//* 2. object constructor
// const constructor = new Object();
// constructor.name = 'Takbir';
// constructor.age = 23;
// constructor.isMarried = false;
// console.log(constructor)

//* 3. Object.create()
// const me = Object.create(obj);
// me.firstName = 'Takbir';
// console.log(me)
// me.activities();
// obj.activities();

//* 4. ES6 class
class Person {
    name = 'Mohammed Takbir';
    age;
    profession = 'Software Engineer';
    constructor(age) {
        this.age = age
    }
};
const person = new Person(23);
// console.log(person);

//* 5. create object using constructor function
function Car(name, year, price){
    this.name = name;
    this.year = year;
    this.price = price;
};
const Porsche = new Car('911 Turbo S', 2018, '1.8K USD!');
console.log(Porsche)