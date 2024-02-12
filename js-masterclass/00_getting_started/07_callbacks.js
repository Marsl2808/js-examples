"use strict";

// 1.Art: function declaration
function sayHello() {
  console.log("sayHello!");
}
sayHello();

// 2. Art: anonymous function, function expression
const sayHello2 = function() {
  console.log("sayHello2!");
};
sayHello2();

// 3. Art: anonymous function, function expression
const sayHello3 = () => {
  console.log("sayHello3!");
};
sayHello3();

// example
console.log("------ (1) ------");
const fs = require("fs");
// node (auto) creates __dirname, which holds path to current js-file
fs.readdir(__dirname, (err, files) => {
  console.log(files);
});
