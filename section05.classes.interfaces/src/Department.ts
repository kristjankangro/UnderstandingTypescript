export abstract class Department {
    static fiscalYear: number = 2020
    protected employees: string[] = [];

    constructor( protected id: number, public name: string) {
    }
    
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeCount() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
