const sendDataToServer = async() => {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let username = document.querySelector('#username').value


    await fetch(`http://localhost:5500/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password, username })
    })
}