    // Exercise 1: Simple If/Else Statement

    // 1.  Create 2 variables, x and y. Each of them should have a different numeric value.
    // let x = 2;
    // let y = 1;

    // 2. Write an if/else statement that checks which number is bigger.

    // if (y == x) {
    //     console.log(" try harder!! ")
    // } else {
    //     console.log("x is the biggest number ! ")
    // }


    // Exercise 2: Chihuahua
    // 1 Create a variable called newDog where it’s value is “Chihuahua”.

    // let newDog = "Chihuahua";
    // console.log(newDog)

    // 2 Check and display how many letters are in newDog.

    // console.log(newDog.length);

    // 3  Display the newDog variable in uppercase and then in lowercase
    //  (no need to create new variables, just console.log twice).

    // newDog.toLowerCase();
    // console.log(newDog.toLowerCase());

    // newDog.toUpperCase();
    // console.log(newDog.toUpperCase());

    // 4 Check
    // if the variable newDog is equal to“ Chihuahua”

    // let newDog = "Chihuahua"

    // if (newDog = "Chihuahua") {
    //     console.log("I love Chihuahuas, it’ s my favorite dog breed ")
    // } else {
    //     (newDog != "Chihuahua")
    //     console.log(" dont care, I prefer cats");
    // }


    // Exercise 3: Even Or Odd

    // 1. Prompt the user
    // for a number and save it to a variable.

    // let userNumber = prompt("what is your favrite number?");
    // console.log(userNumber)

    // 2. Check whether the variable is even or odd.




    // If it is even, display: “x is an even number”.Where x is the actual number the user chose.
    // If it is odd, display: “x is an odd number”.Where x is the actual number the user chose.

    // var userNumber = prompt("what is your number?");

    // if (userNumber % 2 == 0) {
    //     console.log(`${userNumber}is an even number `);

    // } else {
    //     (userNumber % 2 == 1)
    //     console.log(`${userNumber} is an odd number`);
    // }



    // Exercise 4 : Switch Case
    // let whatHappens;
    // let direction


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
    // console.log(whatHappens)
    // 1. What is the value of the whatHappens variable,
    //  when the value of the direction variable is“ forward”

    // whatHappens = "you encounter a monster";

    // 2.  What is the value of the whatHappens variable, when the value of the direction variable is “back”

    // whatHappens = "you arrived home";

    // What is the value of the whatHappens variable, when the value of the direction variable is “right
    //    whatHappens = "you found a river";


    // 4.What is the value of the whatHappens variable, when the value of the direction variable is “left”

    //    whatHappens = "you run into a troll";



    //   Exercise 5: Group Chat

    // let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
    // console.log(users.length)
    //     Using the array above, console.log
    //  the number of users in a group chat based on the following rules:
    //    If there is 1 user, console.log “<name_user> is online”.
    //    If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
    // If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
    // name_user1, name_user2 and 3 more are online

    // if (Number(users.length) === 0) {
    //     console.log(`no one is online.`);
    // } else if (Number(users.length) === 1) {
    //     console.log(`user ${users.length} is online.`);
    // } else if (Number(users.length) === 2) {
    //     console.log(`users ${users.length-1} and ${users.length} are online.`);
    // } else {
    //     console.log(`users ${0},${1} are ${2} more are online.`);
    // }