let username = "Uysal";
console.log(username);

type One = string
type Two = string | number
type Three = "Hello"

// Convert to more or less specific
let a: One = "Hello"
let b = a as Two // Less specific
let c = a as Three // More specific

let d = <One>"World"
let e = <string | number>"World"

const addOrConcat = (a:number, b:number, c:"add" | "concat"): number | string => {
    if (c === "add") {
        return a + b;
    } else {
        return "" + a + b;
    }
}

let myVal: string = addOrConcat(2,2, "add") as string; // Type assertion to string

// Be careful! TS sees no problem - but string is returned
let nextVal: number = addOrConcat(2,2, "concat") as number; // Type assertion to number

console.log(` my value w add ${myVal}`,nextVal);

// 10 as string // Here TS will throw an error because 10 is a number, not a string
(10 as unknown) as string; // Double assertion to convert number to string

// Using type assertion with DOM elements
const myInput = document.getElementById("myInput") as HTMLInputElement; // Type assertion to HTMLInputElement
myInput.value = "UYSAL"; // Now we can access value property