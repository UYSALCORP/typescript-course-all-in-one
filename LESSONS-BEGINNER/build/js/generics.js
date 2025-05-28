"use strict";
console.log("UYSAL");
//! <T> is a generic type parameter
// It allows the function to accept any type of argument
// and return a value of the same type
// const echo = (arg: string): string => arg
//* The function can now accept any type of argument
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
    // The function checks if the argument is an object
    // and returns true if it is, false otherwise
};
console.log(isObj("Uysal"));
console.log(isObj(true));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Uysal" }));
console.log(isObj(null));
const isTrue = (arg) => {
    // The function checks if the argument is truthy
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // If the argument is an empty array, it returns false
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    // If the argument is an empty object, it returns false
    return { arg, is: !!arg };
    // The function returns an object with the argument and a boolean indicating if it is truthy
};
console.log(isTrue(false));
console.log(isTrue(true));
console.log(isTrue(0));
console.log(isTrue(1));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // The function processes a user object with an id property
    console.log(`Processing user with ID: ${user.id}`);
    return user;
};
const user = { id: 1, name: "Uysal" };
const processedUser = processUser(user);
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Yunus");
console.log(store.state);
store.state = "Uysal";
// store.state = 1; // Error: Type 'number' is not assignable to type 'string'.
const myState = new StateObject([42]);
myState.state = (["Uysal", 42, true]); // This will work because the type is flexible
console.log(myState.state);
