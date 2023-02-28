// const obj1 = { a: 2 };
// const obj2 = { a: 2 };

// const obj1String = JSON.stringify(obj1);
// const obj2String = JSON.stringify(obj2);
// console.log(obj1String === obj1String)

// const obj3 = obj1
// console.log(obj1 === obj2) //? return false
// console.log(obj1 === obj3) //? return true

const obj1 = { a: 1, b: 2, c: 5 };
const obj2 = { c: 3, a: 1, b: 2 };

const obj1Keys = Object.keys(obj1);
const obj2Keys = Object.keys(obj2);
function objCompare(obj1Keys, obj2Keys) {
    if (obj1Keys.length === obj2Keys.length) {
        for (const keys of obj1Keys) {
            const obj1Values = obj1[keys];
            const obj2Values = obj2[keys];
            if (obj1Values !== obj2Values) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
console.log(objCompare(obj1Keys, obj2Keys))