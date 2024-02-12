"use strict";

const student = {
  name: "Max Mustermann",
  age: 35,
  subject: "english"
};

console.log(student);
console.log(student.name);
console.log(student["name"]);
if ("age" in student) {
  console.log("age in student");
}

// add & delete
console.log("------ (1) ------");
student.interestedIn = "math";
delete student.age;
console.log(student);

if ("age" in student) {
  console.log("age in student");
}

// loop over
console.log("------ (2) ------");
for (const key in student) {
  console.log("key:", key);
  console.log("value:", student[key]);
}

// Object
console.log("------ (2) ------");
console.log("Object.keys:", Object.keys(student));
console.log("Object.values:", Object.values(student));
console.log("Object.entries:", Object.entries(student));
