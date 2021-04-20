let askUser = prompt("what are the words of the day? ");
let arrUser = askUser.split("");
let starRight = " *";
let starLeft = "* ";
let speace = " ";
let tmp = 0;

function frame() {
    for (let i = 0; i < arrUser.length; i++) {
        if (tmp < arrUser[i].length) {
            tmp = arrUser[i].length;
        }
    }
    tmp += 5;
    let starz = "*";
    for (let j = 0; j < tmp; j++) {
        starz += "*";
    }
    console.log(starz);
    for (let y = 0; y < arrUser.length; y++) {
        let diff = tmp - arrUser[y].length - 3;
        console.log(starRight + arrUser[y] + speace.repeat(diff) + starLeft);
    }
    console.log(starz);

}
frame();