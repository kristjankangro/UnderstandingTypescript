export class Department {
    
    static fiscalYear: number = 2020
    protected employees: string[] = [];

    constructor(private readonly id: number, public name: string) {
    }
    
    describe(this: Department) {
        console.log(this.id + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeCount() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}