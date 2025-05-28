"use strict";
let username = "Uysal";
console.log(username);
// Convert to more or less specific
let a = "Hello";
let b = a; // Less specific
let c = a; // More specific
let d = "World";
let e = "World";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
};
let myVal = addOrConcat(2, 2, "add"); // Type assertion to string
// Be careful! TS sees no problem - but string is returned
let nextVal = addOrConcat(2, 2, "concat"); // Type assertion to number
console.log(` my value w add ${myVal}`, nextVal);
// 10 as string // Here TS will throw an error because 10 is a number, not a string
10; // Double assertion to convert number to string
// Using type assertion with DOM elements
const myInput = document.getElementById("myInput"); // Type assertion to HTMLInputElement
myInput.value = "UYSAL"; // Now we can access value property
