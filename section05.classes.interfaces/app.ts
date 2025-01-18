// interface IPerson {
//     email: string;
//     birthYear: number;
//
//     greet(mess: string): string;
// }

// type Person = {
//     email: string;
//     birthYear: number;
//
//     greet(mess: string): string;
// }

interface IXd {
    readonly xxx: string;
    output?: string; //optional parameter
}

interface IGreetable extends IXd {
    email: string;
    

    greet(mess: string): string;
}

// type AddFn = (a: number, b: number) => number; //function type
interface AddFn {
    (a: number, b: number): number;
}

let add : AddFn = (a, b) => a + b;


console.log(add(1,6))
class Person implements IGreetable {
    xxx: string;

    constructor(public email: string, public birthYear: number, x: string) {
        this.xxx = x;
    }

    greet(mess: string): string {
        return `${mess} ${this.email} ${this.birthYear} greetings`;
    }
}

const user: Person = new Person("kuki@email.com", 1978, "ass");
console.log(user.greet("incoming ..."));