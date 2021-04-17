// 1. Create a variable called sentence.The value of the variable should be a string that contains the words“ not” and“ bad”.For example, “The movie is not that bad, I like it”.


// 2. Create a variable called wordNot where it’ s value is the 
// first appearance of the substring“ not”(from the sentence variable).

// let sentence = "The movie is not really bad actually like it";
// console.log(sentence);
// let sentenceArray = sentence.split(" ");
// console.log(sentenceArray);

sentenceArray = ["The", "movie", "is", "not", "really", "bad", "actually", "like", "it"]
let wordNot = sentenceArray.indexOf("not");
// console.log(wordNot);
let wordBad = sentenceArray.indexOf("bad");
// console.log(wordBad);


if (wordNot < wordBad) {
    console.log(sentenceArray.splice(wordNot, wordBad - wordNot + 1, "good"));
} else(wordNot > wordBad || wordNot != -1 && wordBad != -1); {
    console.log(sentenceArray);
}

let twoArr = sentenceArray.join(" ")
console.log(twoArr)