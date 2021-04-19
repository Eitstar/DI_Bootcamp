function beer() {
    let bottlesLeft;
    let bottles = prompt(`choose a number between 1-99`)
    console.log(bottles)
    for (i = 99; i >= 1; i--) {
        if (i == 1) {
            bottles = "bottle";
            bottlesLeft = "No bottles of beer on the wall!";
        } else if (i - 1) {
            bottles = "bottles";
            bottlesLeft = i - 1 + " bottles of beer on the wall!";
        }
        console.log(i + " " + bottles + " of beer on the wall,");
        console.log(i + " " + bottles + " of beer,");
        console.log("Take 1 down, pass it around,");
        console.log(bottlesLeft);
    }
}
console.log(beer());