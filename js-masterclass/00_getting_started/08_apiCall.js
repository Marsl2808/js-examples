"use strict";

//const http = require("http");
const https = require("https");
const url = "https://api.spacexdata.com/v4/launches/latest";

https.get(url, res => {
  let data = "";

  res.on("data", chunk => {
    console.log("data:", chunk);
    data += chunk;
  });

  res.on("end", () => {
    const dataObj = JSON.parse(data);
    console.log("end:", dataObj.name);
  });
  console.log(res.statusCode);
});
