console.log("Starting application process");

class Department {
    // public name: string;
    private employees: string[] = [];

    constructor(private readonly id: number, public name: string) {
    }

    describe(this: Department) {
        console.log(this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeCount() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

let d = new Department(1, "John Doe");
console.log(d);

d.describe();
d.addEmployee("3 Doe");
d.addEmployee("1 Doe");
// let dCopy = { name: "ggg",describe: d.describe };
// dCopy.describe();

d.printEmployeeCount();