// Using this object:

let groceries = {
        fruits: ["pear", "apple", "banana"],
        vegetables: ["tomatoes", "cucumber", "salad"],
        totalPrice: "20$",
        other: {
            payed: true,
            meansOfPayment: ["cash", "creditCard"]
        }
    }
    // Hint: To do this daily challenge, take a look at today’ s lesson Pass By 
    // Value & Pass By Reference

//     Copy this object using the method that was taught in today’ s lesson.
// Change the value of totalPrice to 35 $.Will we also see this modification in the copied objects ?
//     Change the value of payed to false.Will we also see this modification in the copied objects ? Why ?


let objJson = JSON.stringify(groceries)
console.log(objJson);


let copyGroceries = JSON.parse(objJson);

copyGroceries.totalPrice = "35$";

copyGroceries.other.payed = false;
console.log(copyGroceries)
    // console.log(copyGroceries)