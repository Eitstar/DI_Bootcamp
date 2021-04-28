let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];


// let getCarHonda = inventory.map((carInventory) => {
//     console.log(carInventory.car_make)
// });

// this is my answer:

// let getCarHonda = ((carInventory) => {
//     for (let i of carInventory) {
//         if (i.car_make === "Honda")
//             return console.log(`This is a ${ i.car_make } ${ i.car_model } from ${i.car_year }`)
//     }
// })
// getCarHonda(inventory)


// function myFunction(carInventory) {
//     inventory.sort(function(a, b) { return a.car_year - b.car_year });

// }
// myFunction(carInventory)
// function displayCars() {




const sortCarInventoryByYear = (carInventory) => {
    let sortedArray = carInventory.sort((a, b) => a.car_year - b.car_year);
    return sortedArray;
};
console.log(sortCarInventoryByYear(inventory));