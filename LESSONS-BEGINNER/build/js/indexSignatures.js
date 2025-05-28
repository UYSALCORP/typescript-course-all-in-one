"use strict";
//! Index Signatures
//? Index signatures allow you to define the types of properties that can be accessed using a dynamic key. 
//? in Turkish: Dinamik bir anahtar kullanılarak erişilebilen özellik türlerini tanımlamanıza olanak tanır.
const todayTransactions = {
    Pizza: 10,
    Books: -5,
    Job: 50,
};
console.log(todayTransactions.Pizza); // Output: 10
let prop = "Pizza";
console.log(todayTransactions[prop]); // Output: 10
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
// todayTransactions.Pizza = 20; // Error: Cannot assign to 'Pizza' because it is a read-only property
console.log(todaysNet(todayTransactions)); // Output: 65
const student = {
    name: "Yunus",
    GPA: 3.5,
    classes: [101, 102, 103],
};
for (const key in student) {
    // console.log(`${key}: ${student[key]}`); // Output: name: Yunus, GPA: 3.5, classes: 101,102,103
}
//? keyof does not work with index signatures directly, but you can use it with specific keys defined in the interface.
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // Output: name: Yunus, GPA: 3.5, classes: 101,102,103
}
// Object.keys makes an array of keys, so you can use keyof with it
Object.keys(student).map(key => {
    console.log(student[key]); // Output: Yunus, 3.5, 101,102,103
});
//! 2:55:14'de kaldık.
//! https://www.youtube.com/watch?v=gieEQFIfgYc
//! Day 1 End.
