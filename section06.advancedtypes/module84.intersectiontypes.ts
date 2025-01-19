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