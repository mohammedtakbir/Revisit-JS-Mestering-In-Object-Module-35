
const phone = {name: 'Galaxy S23+', storage: '256GB', ram: '8GB', display: '6.6inch', battery: '4700mah'};

//* first option to loop through an object to get the keys/properties
// const keys = Object.keys(phone);
// console.log(keys)
// for(const key of keys){
//     console.log(key)
// }

//* second option to loop through an object---> for---in
// for(const key in phone){
//     const value = phone[key];
//     console.log(key, value)
// }

//* advance---> Object.entries()
const entries = Object.entries(phone);
for(const keyValue of entries){
    const [key, value] = keyValue;
    console.log(key, value);
}