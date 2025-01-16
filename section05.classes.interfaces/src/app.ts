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

class ITDepartment extends Department {
	constructor(id: number, public admins: string[]) {
		super(id, "IT osakond");
	}
}

class AccountingDepartment extends Department {
	
	constructor(id: number, private accountants: string[]) {
		super(id, "AccountingDepartment");
	}
	
	getFirstAccountatn(): string {
		return this.accountants[0];
	}
}

console.log("Starting application process");

let d = new Department(1, "John Doe");
console.log(d);

d.describe();
d.addEmployee("3 Doe");
d.addEmployee("1 Doe");
// let dCopy = { name: "ggg",describe: d.describe };
// dCopy.describe();

d.printEmployeeCount();

let d2 = new ITDepartment(2, ["max"]);

d2.describe();