
console.log("Starting application process");

function add(a: number, b: number ): number {
    // if (typeof a !== "number" && typeof b !== "number")
    //     throw new Error("Expected a number");
    return a + b;
}

let a = 5;
let b = 5.7;

console.log(add(a, b));