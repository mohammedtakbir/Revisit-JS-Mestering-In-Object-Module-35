const arr1 = [1, 2];
const arr2 = [1, 2];
// if (arr1 === arr2) {
//     console.log('same array')
// } else {
//     console.log('different array')
// }

// const obj1 = { a: 1 };
// const obj2 = obj1;
// obj2.b = 2;
// console.log(obj2)
// const obj2 = { a: 2 };
// if (obj1 === obj2) {
//     console.log('same object')
// } else {
//     console.log('different object')
// }
// if (obj1 === obj2) {
//     console.log('same object')
// } else {
//     console.log('different object')
// }

//* compare with stringify

// const obj1 = { a: 1 , b: 2, c: 3};
// const obj2 = { a: 1 , b: 5, c: 3};

// const obj1String = JSON.stringify(obj1);
// const obj2String = JSON.stringify(obj2);

// if (obj1 === obj2) {
//     console.log('same object')
// } else {
//     console.log('different object')
// }
// if (obj1String === obj2String) {
//     console.log('same object')
// } else {
//     console.log('different object')
// }

const obj1 = { c: 3, b: 2, a: 1 };
const obj2 = { a: 1, b: 2, c: 3 };

const obj1Keys = Object.keys(obj1);
const obj2Keys = Object.keys(obj2);

function objCompare(obj1Keys, obj2Keys) {
    if (obj1Keys.length === obj2Keys.length) {
        for (const key of obj1Keys) {
            const obj1Value = obj1[key];
            const obj2Value = obj2[key];
            if (obj1Value !== obj2Value) {
                return false;
            }
        }
        return true
    } else {
        return false;
    };
};
console.log(objCompare(obj1Keys, obj2Keys))
