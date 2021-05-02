let userInput = () => {
    let = document.getElementById("daily").addEventListener("submit", function(event) {
        event.preventDefault()
    });

    let name = daily.elements.name.value;
    let lastname = daily.elements.lastname.value;
    let userDetails = {
        name: name,
        lastname: lastname,
    }
    console.log(JSON.stringify(userDetails, null, 2));
    console.log(userDetails);


}


userInput();