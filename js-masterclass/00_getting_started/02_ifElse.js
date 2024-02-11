"use strict";

let a = false;
let b = false;

if (a) {
  console.log("Hello if");
} else if (!(a && b)) {
  console.log("Hello else if");
} else {
  console.log("Hello else");
}

console.log("----------------");

// Vergleich (implizite Typumwandlung): ==
console.log("true == 1:", true == 1);
console.log("true != 1:", true != 1);

// Strikter Vergleich
console.log("true === 1:", true === 1);
console.log("true !== 1:", true !== 1);
