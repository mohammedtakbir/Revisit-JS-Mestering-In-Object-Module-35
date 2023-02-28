//* 5 ways to create object

//* object literals
const obj = {
    name: 'Takbir',
    age: 23,
    profession: 'web developer',
    activities: function () {
        console.log(`${this.name} is working on a large website`)
    }
};


//* object constructor 
// const obj = new Object();
// obj.name = 'Takbir';
// obj.age = 23;
// console.log(obj)

//* Object.create()
// const newObj = Object.create(obj);
// newObj.name = 'Mohammed';
// newObj.isMarried = false;
// console.log(newObj.name, newObj.isMarried)

//* constructor function
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// const person1 = new Person('takbir', 23);
// console.log(person1);

//* ES6 class
class Person {
    name;
    age;
    isMarried = false;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person('takbir', 23);
console.log(person1)