"use strict";
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays the ${this.instrument} ${action}`;
    }
}
const Uysal = new Guitarist("Yunus", "Guitar");
console.log(Uysal.play("beautifully"));
//! Static properties and methods
// class Band {
//     static members: number = 0; // Static property
//     constructor() {
//         Band.members += 1; // Increment static property
//     }
//     static getMembersCount(): number { // Static method
//         return Band.members;
//     }
// }
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name + 1; // Assign a unique ID based on the static property
        // Peeps.count += 1; // Increment static property // First id will be 0
        this.id = ++Peeps.count; // First id will be 1
    }
}
Peeps.count = 0; // Static property
const Yunus = new Peeps("Yunus");
const Omer = new Peeps("Omer");
const Su = new Peeps("Su");
console.log(Peeps.count); // Output: 3
console.log(Yunus.id); // Output: 1
class Bands {
    constructor() {
        this.dataState = []; // Initialize the data state
    }
    // Method to add data
    get data() {
        return this.dataState; // Return the current data state
    }
    // Setter to update the data state
    set data(value) {
        if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value; // Update the data state if the value is valid
            return;
        }
        else {
            throw new Error("Invalid data: Param is not an array of strings");
        }
    }
}
const myBands = new Bands();
myBands.data = ["Yunus", "Omer", "Ezgi"]; // Set data
console.log(myBands.data); // Output: ["Yunus", "Omer", "Ezgi"]
myBands.data = [...myBands.data, "Su"]; // Append new data
console.log(myBands.data); // Output: ["Yunus", "Omer", "Ezgi", "Su"]
