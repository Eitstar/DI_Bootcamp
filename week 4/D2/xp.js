// // Exercise 1 : Function With Two Parameters

// // Create a one line

// // function
// // that receives two numbers as parameters and returns the sum.


// const y = (num1, num2) => num1 + num2;
// console.log(y(2, 5));



// // Exercise 2: Closure
// // Analyse the code below, and before executing it, predict the outcome of the last line.
// // const addTo = x => y => x + y;
// // var addToTen = addTo(10);
// // addToTen(3);
// // console.log(addToTen());
// // i think it should come out to 13;



// // Exercise 3 : Currying
// // A curried function is a function of several arguments rewritten such that it accepts the first argument and returns a function that accepts the second argument and so on.
// //  This allows functions of several arguments to have some of their initial arguments partially applied.

// // const sum = (a, b) => a + b
// // const curriedSum = (a) => (b) => a + b
// // console.log(curriedSum(30)(1));

// // const y = (a) => (b) => a * b;
// // console.log(y());
// // const y = (a) => (b) => a * b;
// // should be 31



// // Exercise 4 : Currying
// // Analyse the code below, and before executing it, predict the outcome of the last line.
// // const sum = (a, b) => a + b
// // const curriedSum = (a) => (b) => a + b
// // const add5 = curriedSum(5)
// // add5(12)
// should come out to 17



// // Exercise 5 : Composing
// // Analyse the code below, and before executing it, predict the outcome of the last line.
// // const compose = (f, g) => (a) => f(g(a));
// // const add1 = (num) => num + 1;
// // const add5 = (num) => num + 5;
// // compose(add1, add5)(10)
// // should come out 16