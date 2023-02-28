//* implicit binding
//? exp-01
// const player = {
//     name: 'Sakib',
//     age: 36,
//     playerActivities: function(){
//         console.log(`${this.name} is playing against India`);
//     }
// };
// player.playerActivities();

// function printPlayerNameFunction(obj){
//     obj.printPlayerName = function(){
//         console.log(`${this.name}`)
//     }
//     console.log(obj)
// };

//? exp-02
// const player = {
//     name: 'Sakib',
//     age: 37
// };
// printPlayerNameFunction(player);
// player.printPlayerName();

//? exp-03
// function person(name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () {
//             console.log(this.name)
//         },
//         father: {
//             name: 'XXX',
//             printName: function(){
//                 console.log(this.name)
//             }
//         }
//     }
// };
// const sakib = person('sakib', 39);
// sakib.printName();
// sakib.father.printName();

//* explicit binding-call(), apply(), bind()
// function printName(age) {
//     console.log(`My name is ${this.name} and I am ${this.age + age} now`)
// }

// const player = {
//     name: 'sakib',
//     age: 39
// };
// printName.call(player, 2);
// printName.apply(player, [3+2]);
// const sakib = printName.bind(player, 25);
// sakib(player)

//* new binding
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// const sakib = new Person('Sakib', 39);
// console.log(sakib)

//* window binding
// "use strict"
function printName(){
    // console.log(this.name)
    console.log(window === this)
}
const person = {
    name: 'sakib'
}
printName()