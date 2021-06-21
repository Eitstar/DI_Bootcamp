const fs = require('fs')
    //Create a text file and write something inside (example: ‘Some Text To See’)
    // Create an fs.js file, and inside use the 
    // Node JS File System to read the text file and console.log the output in the terminal
fs.readFile('./text.text', 'utf8', (err, data) => {
        if (err) return console.error(err)

        console.log(data)
    })
    //Create an fs.js file, and use the Node js File System to create a new text file and write to it.



// fs.writeFile('./text2.txt', ('text2, added from writeFile'), err => {
//     if (err) return console.error(err)


//file written successfully
//   })


//   Exercise 3 : Appending And Deleting Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create and write to a new text file. (Example: “Buy Milk”)


fs.writeFile('./text3.text', ('text3, added from writeFile'), err => {
    if (err) return console.error(err)
})

fs.appendFile('./text3.text', ' this is append data', function(err) {
    if (err) throw err;
    console.log('text3!');
});

fs.unlink('./text3.text', function(err) {
    if (err) throw err;
    console.log('text3 deleted!');
});