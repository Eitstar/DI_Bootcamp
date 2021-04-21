function allLetter(inputtxt) {
    let letters = /^[A-Za-z]+$/;
    if (inputtxt.value.match(letters)) {
        return true;
    } else {
        return false;
    }
}
console.log()