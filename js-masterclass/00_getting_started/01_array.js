"use strict ";

let myArray = ["Hansi", "Juergen", "Klaus"];

console.log(myArray);
console.log(typeof myArray);
console.log(myArray instanceof Array);
console.log("length: ", myArray.length);
console.log("[0]: ", myArray[0]);

console.log("-------- (1) --------");
myArray.push("Otto", "Marc");
console.log(myArray);

console.log("-------- (2) --------");
const lastElem = myArray.pop();
console.log(myArray);
console.log("last: ", lastElem);

console.log("-------- (3) --------");
myArray[1] = "Juergen2";
console.log(myArray);

console.log("-------- (4) --------");
myArray.splice(1, 2);
console.log(myArray);

console.log("-------- (5) --------");
myArray.splice(1, 0, "Joker");
console.log(myArray);

console.log("-------- (6) --------");
const myArrayString = myArray.join(", ");
console.log(myArrayString);
// back to array
const myArray2 = myArrayString.split(", ");
console.log(myArray2);
