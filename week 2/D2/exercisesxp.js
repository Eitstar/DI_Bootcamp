    // Exercise 1: Simple If/Else Statement

    // 1.  Create 2 variables, x and y. Each of them should have a different numeric value.
    let x = 5
    let y = 2

    // 2. Write an if/else statement that checks which number is bigger.

    if (y > x) {
        console.log("try harder !!")
    } else if (x < y) {
        console.log("almost !!")

        // If x equals 5 and y equals 2, the program should display:

        // x is the biggest number

    } else if (x == 5 && y == 2) {
        console.log("x is the biggest number !!")
    }

    //     Exercise 2: Chihuahua
    //    1 // Create a variable called newDog where it’s value is “Chihuahua”.

    let newDog = "Chihuahua";
    console.log(newDog)

    //   2  // Check and display how many letters are in newDog.

    newDog = newDog.length
    console.log(newDog);

    //   3 // Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
    let newDog = "Chihuahua";
    newDog.toLowerCase();
    console.log(newDog.toLowerCase());

    let newDog = "Chihuahua";
    newDog.toUpperCase();
    console.log(newDog.toUpperCase());

    //    4 // Check if the variable newDog is equal to “Chihuahua”

    let newDog = "Chihuahua"

    if it does, display‘ I love Chihuahuas, it’ s my favorite dog breed’
    if (newDog = "Chihuahua") {
        console.log("I love Chihuahuas, it’ s my favorite dog breed ")
    } else if (newDog != "Chihuahua") { console.log(" dont care, I prefer cats"); }


    // Exercise 3: Even Or Odd

    // 1. Prompt the user for a number and save it to a variable.

    // var user = prompt("what is your favrite number?");
    // console.log(user)

    // 2. Check whether the variable is even or odd.

    // 40%2===0


    // If it is even, display: “x is an even number”. Where x is the actual number the user chose.
    // If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

    // var userNumber = prompt("what is your number?");

    // if (userNumber % 2 === 0) {
    //     console.log("x is an even number ")

    // } else  (userNumber % 2 === 1) {
    //     console.log(" x is an odd number")
    // }



    // Exercise 4 : Switch Case
    // let whatHappens;
    // let direction;

    // switch (direction) {
    //     case "forward":
    //         break;
    //         whatHappens = "you encounter a monster";
    //     case "back":
    //         whatHappens = "you arrived home";
    //         break;
    //         break;
    //     case "right":
    //         whatHappens = "you found a river";
    //         break;
    //     case "left":
    //         break;
    //         whatHappens = "you run into a troll";
    //         break;
    //     default:
    //         whatHappens = "please enter a valid direction";
    // }

    // 1.What is the value of the whatHappens variable, when the value of the direction variable is “forward”

    // whatHappens = "you encounter a monster";

    //2.  What is the value of the whatHappens variable, when the value of the direction variable is “back”

    // whatHappens = "you arrived home";

    // What is the value of the whatHappens variable, when the value of the direction variable is “right
    //    whatHappens = "you found a river";


    // 4.What is the value of the whatHappens variable, when the value of the direction variable is “left”

    //    whatHappens = "you run into a troll";




    //   Exercise 5: Group Chat

    let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

    //   Using the array above, console.log the number of users in a group chat based on the following rules:


    // 1. If there is no users (the users array is empty), console.log “no one is online”.

    if (users.length == 0) { console.log('no one is online.'); }

    // If there is 1 user, console.log “<name_user> is online”.
    else if (users.length == 1) {
        console.log('user[0]is online.');
    }
    //    If there are 2 users, console.log “<name_user1> and <name_user2> are online”. 
    else if (users.length == 2) {
        console.log('users [0] and [1] are online.');
    }

    // If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.

    // name_user1, name_user2 and 3 more are online
    else {
        console.log('users [0],[1] are [2] more are online.');
    }