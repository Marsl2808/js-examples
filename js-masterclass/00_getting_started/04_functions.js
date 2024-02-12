"use strict";

const greetingName = "Alfred";

/**
 * Greets the name given in the chosen language. Returns false if the language is not supported, otherwise true.
 * @param {string} name - Greeting name
 * @param {string} language - Greeting language
 * @returns {boolean}
 */
function sayHello(name, language = "de") {
  if (language === "de") {
    console.log("Hallo " + name);
  } else if (language === "en") {
    console.log("Hello " + name);
  } else {
    return false;
  }
  return true;
}

sayHello(greetingName, "de");
sayHello(greetingName, "en");
sayHello(greetingName);
