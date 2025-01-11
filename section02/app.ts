console.log("Starting application process");

function add(a: number, b: number, printResult: boolean, phrase: string): number {
    const result = a + b;
    if (printResult) {
        console.log(`${phrase} ${result}`);
    }
    return result;
}

let a = 5;
let b = 5.7;
const printResult = true;
let phrase = "Result is: ";

add(a, b, printResult, phrase);