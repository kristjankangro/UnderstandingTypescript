type Admin = {
	name: string;
	privileges: string[];
};

interface Employee {
	name: string;
	startDate: Date;
}

// type ElevatedEmployee = Admin & Employee;
interface ElevatedEmployee extends Admin, Employee {
}

const e1: ElevatedEmployee = {
	name: "Test",
	privileges: ["ok"],
	startDate: new Date("2021-01-12"),
}

type Combinable = number | string;

function add(a: Combinable, b: Combinable): Combinable {
	return (typeof a === "number" && typeof b === "number") ? a + b :
		(typeof a === "string" && typeof b === "number") ? a + b :
			null;
}

type UnknownEmployee = Employee | Admin;

//type guards
function printEmployee(employee: UnknownEmployee) {
	console.log(employee.name);
	console.log(employee);
	if ("privileges" in employee && employee.privileges) {
		console.log(employee.privileges);
	}
}

printEmployee({name: "Test", startDate: new Date("2021-01-12")});

class Car {
	drive() {
		console.log("Drive");
	}
}

class Truck {
	drive() {
		console.log("Drive truck!");
	}

	loadCargo() {
		console.log("Load Cargo");
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);
function useVehicle(v: Vehicle) {
	v.drive();
	if ("loadCargo" in v || v instanceof Truck) {
		v.loadCargo();
	}
}