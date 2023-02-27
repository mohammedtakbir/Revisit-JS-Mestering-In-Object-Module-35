const phone = {name: 'Galaxy S23+', storage: '256GB', ram: '8GB', display: '6.6inch', battery: '4700mah'};
// console.log(phone)

//* Object.keys()
// console.log(Object.keys(phone)); //? return array of object's key/property

//* Object.values()
// console.log(Object.values(phone)) //? return array of object's values

//* Object.entries()
// console.log(Object.entries(phone))
// const arrOfPhone = Object.entries(phone);
// arrOfPhone.forEach(phone => {
//     console.log(phone)
// })

//* Object.seal()
Object.seal(phone);

phone.ram = '12GB'; //? you can only modify the value when you use seal

//* Object.freeze();
Object.freeze(phone);

phone.battery = '5000mah' //! you cannot modify/remove/add value when you use Object.seal()

//* Object delete
delete phone.ram;
console.log(phone)