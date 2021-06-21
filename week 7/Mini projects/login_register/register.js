const userInputs = async() => {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const userName = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;

    const allRegisterData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        userName: userName,
        password: password
    }
    try {

        const res = await fetch('http://localhost:3000/register', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(allRegisterData)
            })
            // .then(res => res) //.json()
            // .then(res => console.log(res))
    } catch (err) { console.log(err, 'Error at userInputs'); }

}