//part I
// const largeNumber = 356;

// module.exports = {
//     mainNum: largeNumber

// }


//part II



// Part III:

module.exports.currentDate = () => {

    return new Date().toLocaleString();
}

const currentDate = () => {
    let time = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
    return new Date().toLocaleString();
}

console.log(currentDate());