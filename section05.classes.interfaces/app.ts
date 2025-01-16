import {Department} from "./src/department";
import {ITDepartment} from "./src/ITDepartment";
import {AccountingDepartment} from "./src/accountingDepartment";
import {Utils} from "./src/utils/utils";

console.log("Starting application process");

const MyDepartment = new Department(1, "John Doe");
console.log(MyDepartment);


MyDepartment.describe();
MyDepartment.addEmployee("3 Doe");
MyDepartment.addEmployee("1 Doe");
// let dCopy = { name: "ggg",describe: d.describe };
// dCopy.describe();

MyDepartment.printEmployeeCount();

const d2 = new ITDepartment(2, ["max"]);
d2.describe();

const accounting = new AccountingDepartment(3, []);
console.log(accounting.lastReport) ;
accounting.addReport("kuki");

console.log(accounting.lastReport) ;
console.log(Utils.GetStr()) ;