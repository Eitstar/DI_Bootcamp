    console.log('hey');

    const userInputs = async() => {
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;
        const email = document.querySelector('#email').value;
        const userName = document.querySelector('#userName').value;
        const password = document.querySelector('#password').value;
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(userName);
        console.log(password);
        console.log('hey in userInputs');
        try {

            const res = await fetch('http://localhost:3000/register', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, userName, password })
            })
            const data = await res.json()
                //         console.log(data);
            return data
        } catch (err) { console.log(err, 'Error at userInputs'); }

    }