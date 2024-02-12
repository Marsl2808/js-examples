"use strict";

// Attention: fs.readFileSync() -> antipattern (slow)
const fs = require("fs");
const data = fs.readFileSync("data.json", { encoding: "utf-8" });

// show String
console.log(data);
console.log(typeof data);

// convert to js-object
console.log("------ (1) ------");
const dataObj = JSON.parse(data);
console.log(dataObj);
console.log(typeof dataObj);

// convert back to string
const dataStr = JSON.stringify(dataObj);
console.log("------ (2) ------");
console.log(typeof dataStr);
console.log(dataStr);
fs.writeFileSync("out.json", dataStr);
