function playTheGame() {

    let user = confirm(`Press a button!`);

    if (!user) {
        return alert(`No problem, Goodbye!`)
    }

    user = prompt(`enter a number between 0 and 10`)
    if (isNaN(parseInt(user))) {
        return alert(`Sorry not a number, goodbye`)
    }

    if (user < 0 || user > 10) {
        return alert(`Sorry it’s not a good number, Goodbye`)
    }

    let computerNumber = Math.floor(Math.random() * 10);
    console.log(computerNumber)
}


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
test(userNumber, computerNumber);