const obj = {
    name: 'Takbir',
    age: 23,
    profession: 'web developer',
    activities: function () {
        return (`${this.name} is working on a large website`)
    },
    interview: function(company){
        const activity = this.activities();
        return `${activity} and also practicing ${company}'s interview questions`;
    }
};
// console.log(obj.activities())
console.log(obj.interview('Google'))