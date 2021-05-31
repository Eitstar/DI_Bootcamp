// Exercise 1 : Comparison



// let num = Math.floor(Math.random() * 100) + 1;
// const compareToTen = (num) => {

//     promise = new Promise((resolve, reject) => {

//         if (num > 10) {
//             resolve(`${num} is greater than 10, success! `)
//         } else {
//             reject(`${num} is less than 10,Bummer! `)

//         }
//     })

// }
// compareToTen(num);
// console.log(promise);
// promise.then(result => console.log(result))
//     .catch(error => console.log(error))

// promise.then((data) => {
//         console.log('then , console log of resolve', data);
//     })
//     .catch(err => {
//         console.log('catch, console log of reject', err);
//     })


//     Exercise 2 : Promises


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve('success');
//         } else {
//             reject('error');
//         }

//     }, 4000)
// });

// console.log(promise)
// promise.then((resolve) => {
//         console.log(resolve);
// })
//     .catch((reject) => {
//         console.log(error);
//     })

//2& 3 Read about Promise.resolve() and Promise.reject().

// const promise = Promise.resolve(
//     setTimeout(() => {
//         console.log("success");
//     }, 4000)
// );

// or 

// Promise.resolve(setTimeout(() => { console.log('success') }, 4000));


// Exercise 3 : Resolve & Reject


// const p = Promise.resolve(3).then(res => {
//     console.log(res)
// })


// const promise2 = Promise.reject('failed')
//     .catch(console.log('Boo!'))