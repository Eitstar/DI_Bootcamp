let userInput = () => {
    document.getElementById('daily');
    let name = daily.elements.name.value;
    let lastname = daily.elements.lastname.value;

    let userDetails = {
        name: daily.name.value,
        lastname: daily.lastname.value,
    }
    console.log(JSON.stringify(userDetails, null, 2));


}

userInput();


// console.log(userDetails);

console.log(daily.elements.name);
console.log(daily.elements.lastname);