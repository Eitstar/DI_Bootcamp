const anagrams = (str, str2) => {
    let string = str.toLowerCase().split('')
    let string2 = str2.toLowerCase().split('')
    let reslut = true;

    string.filter((item) => {
        if (!(string2.find(e => e === item))) {
            reslut = false;
        }
    })
    return reslut
}
console.log(anagrams("The Morse Code", "Here come dots"))