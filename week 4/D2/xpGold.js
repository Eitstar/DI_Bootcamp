 let landscape = function() {
     let result = "";
     let flat = function(x) {
         for (let count = 0; count < x; count++) {
             result = result + "_";
         }
     }
     let mountain = function(x) {
         result = result + "/"
         for (let counter = 0; counter < x; counter++) {
             result = result + "'"
         }
         result = result + "\\"
     }

     flat(4);
     mountain(4);
     flat(4)
     return result;
 }



 // place the 4 in flat  but flat has another 4 added 
 // mountain is 4 
 //  number of _ 3 times 3___
 //  /''' 
 //  ___/'''\\___
 landscape()
 console.log(landscape());