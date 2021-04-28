// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const { name, location: { country, city, coordinates: [lat, lng] } } = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// should come out :I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
// Instructions
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({ first: 'Elie', last: 'Schoppik' }).
// The
// function should
// return a string as seen in the example below.
// displayStudentInfo({ first: 'Elie', last: 'Schoppik' })
//     // 'Your full name is Elie Schoppik'`
// Destructure this object inside the
// function.

// const obj = {

//     first: 'Elie',
//     last: 'Schoppik'
// }

// const displayStudentInfo = ((obj) => {
//     //     console.log({ first, last })
//     const { first, last } = obj
//     console.log(`Your full name is ${first} ${last}`)
// })
// displayStudentInfo({ first: 'Elie', last: 'Schoppik' })


// Exercise 3: User & Id
// Instructions
// let users = { user1: 18273, user2: 92833, user3: 90315 };

// // const userArr = ((users) => {
// //     return console.log(users)
// // });
// // userArr(users)

// const objectArray = Object.entries(users);
// console.log(objectArray)
// objectArray.forEach(([key, value]) => {
//     return console.log([key, value * (2)])

// });

// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.fromEntries());

// let keys = [];
// for (let value in users) {
//     if (users.hasOwnProperty(value)) {
//         keys.push(value)
//     }
// }
// keys; //



// Using methods taught in class, turn the users object into an array:
//     Excepted output: [
//         ['user1', 18273],
//         ['user2', 92833],
//         ['user3', 90315]


// FYI: The number is their ID number.

// Modify the outcome of part 1, by multipling the user’ s ID by 2.
// Excepted output: [
//         ['user1', 36546],
//         ['user2', 185666],
//         ['user3', 180630]

//         Using this object
//         const users = { user1: 18273, user2: 92833, user3: 90315 }


// Exercise 4: Person Class

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const member = new Person('John');
// console.log(typeof(member));
// should be Object becuse member is a typeof object


// Exercise 5: Dog Class

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// };



// 3 I think this should be the correct answer 
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };