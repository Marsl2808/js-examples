"use strict";

// while
let ctr = 0;
while (ctr < 2) {
  console.log("while: ", ctr);
  ctr++;
}

// do-while
let ctr2 = 0;
do {
  console.log("do-while: ", ctr2);
  ctr2++;
} while (ctr2 < 2);

// for
for (let ctr3 = 0; ctr3 < 100; ctr3++) {
  console.log("for: ", ctr3);
  if (ctr3 === 4) {
    break;
  } else {
    continue;
  }
  // unreachable code goes here
}

// enhanced for
const students = ["Max", "Moritz", "Peter"];
for (const i in students) {
  console.log("enhanced-for (in): ", i);
}

for (const i of students) {
  console.log("enhanced-for (of): ", i);
}
