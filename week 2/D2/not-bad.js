// 1. Create a variable called sentence.The value of the variable should be a string that contains the words“ not” and“ bad”.For example, “The movie is not that bad, I like it”.

let sentence = "The movie is not that bad, I like it"

// 2. Create a variable called wordNot where it’ s value is the first appearance of the substring“ not”(from the sentence variable).

let wordNot = "not that bad, I like it"

// 3. Create a variable called wordBad where it’ s value is the first appearance of the substring“ bad”(from the sentence variable).

let wordBad = "bad, I like it"

// 4. If the word“ bad” comes after the word“ not”, you should replace the whole“ not… bad” substring with“ good”, then console.log the result.





let sentence = "The movie is not that bad, I like it"
let sentence = sentence.replace(/not that bad/, "good");
console.log(sentence)

let wordNot = "not that bad, I like it"
let wordNot = wordNot.replace(/not that bad/, "good");
console.log(wordNot)

let wordBad = "bad, I like it"
console.log(wordBad)