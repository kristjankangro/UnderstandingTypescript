export class Department {
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