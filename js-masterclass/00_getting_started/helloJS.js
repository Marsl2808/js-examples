"use strict"

// first var: let, var (deprecated), const
let greeting;
greeting = "Hello JS!";
console.log(typeof greeting);
console.log(greeting);

console.log("---");
greeting = true;
console.log(typeof greeting);
console.log(greeting);

// explicit casting
// 1) numeric: Number(input), parseInt(input), parseFloat(input)
// 2) boolean: Boolean(input) -> false: zero, empty string, undefined, null
// 3) string: String(input)