import {Department} from "./department";
import {ITDepartment} from "./ITDepartment";

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