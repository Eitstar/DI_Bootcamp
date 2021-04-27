// // // Instructions
// // // Analyze these pieces of code before executing them.What will be the outputs ?
// // //     -- -- --1-- -- --
// // const fruits = ["apple", "orange"];
// // const vegetables = ["carrot", "potato"];

// // const result = ['bread', ...vegetables, 'chicken', ...fruits];
// // console.log(result);

// // // -- -- --2-- -- --
// // const country = "USA";
// // console.log([...country]);

// // // -- -- --Bonus-- -- --
// // let newArray = [...[, , ]];
// // console.log(newArray);






// // Using this array:

// // let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// //     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// //     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// //     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// //     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// //     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
// //     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
// // ];


// // let gravbeName = users.map((name) => {
// //     console.log(`Hello ${name.firstName}`)


// // });


// // let x = users.filter((congratulate) => {
// //     if (congratulate.role === "Full Stack Resident") {
// //         return console.log(`congratulate ${congratulate.firstName}`)
// //     }

// // });
// // console.log(x)
// // // 3
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];



let combine = epic.reduce((zero, loop) => {
    return zero += ' ' + loop
        //zero = zero+ ' ' + loop

})

console.log(combine)


// // Exercise 4: Employees #2

// let student = [{ name: "Ray", course: "Computer Science", isPassed: true },
//     { name: "Liam", course: "Computer Science", isPassed: false },
//     { name: "Jenner", course: "Information Technology", isPassed: true },
//     { name: "Marco", course: "Robotics", isPassed: true },
//     { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
//     { name: "Jamie", course: "Big Data", isPassed: false }
// ];

// // Use the filter() method to congratulate the students that passed the course.

// let passed = student.filter((filter) => {
//     if (filter.isPassed == true) {
//         console.log(`we would congratulate ${ filter.name}`)

//     }

// })