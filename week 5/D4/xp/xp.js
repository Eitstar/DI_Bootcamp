// Exercise 1:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);


// const exAwait = async() => {
//     return await fetch("https://swapi.dev/api/starships/9/")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(e => {
//             console.log(e);
//         })
// }
// exAwait()


// Exercise 2:
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// Analyze the code provided above what will be the outcome ?

// 1 st the calling will apper &
//  after 2 seconds the result from  resolveAfter2Seconds 'resolved' will apper