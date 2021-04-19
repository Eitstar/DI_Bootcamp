function playTheGame() {

    let user = confirm(`pleae Press a ok to entire the game !`);

    if (!user) {
        return alert(`No problem, Goodbye!`)
    }

    let newNumber = prompt(`enter a number between 0 and 10`)
    if (isNaN(parseInt(newNumber))) {
        return alert(`Sorry not a number, goodbye`)
    }

    if (newNumber <= 0 || newNumber >= 10) {
        console.log(newNumber)
        return alert(`Sorry it’s not a good number, Goodbye`)
    }
    let computerNumber = Math.floor(Math.random() * 10);
    console.log(computerNumber)
}

let computerNumber = "";
let userNumber = "";

playTheGame()

function test(userNumber, computerNumber) {

    for (let i = 0; i <= 2; i++) {
        if (userNumber == computerNumber) {
            alert(`WINNER`)
        } else if (computerNumber < userNumber) {
            alert(`Your number is bigger then the computer’s,guess again`)
            prompt = (`try again guess the number `)
        }
    }
    return alert(`out of chances`)
}
test(userNumber, computerNumber)