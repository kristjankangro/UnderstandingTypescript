import {Department} from "./Department.ts";

export class AccountingDepartment extends Department {
    describe() {
            console.log(`AccountingDepartment id ${this.id}`);
    }

    private _lastReport: string ="";
    
    get lastReport(): string {
        if (this._lastReport === null) { throw Error('No report for Department'); }
        return this._lastReport;
    }
    
    set lastReport(value: string) {
        this._lastReport = value;
    }
    constructor(id: number, private reports: string[]) {
        super(id, "AccountingDepartment");
    }

    getFirstReport(): string {
        return this.reports[0];
    }
    
    addReport(report: string) {
        this.reports.push(report);
        this._lastReport = report;
    }
      
    
    addEmployee(employee: string) {
        if (employee != "Max")
        super.addEmployee(employee);
    }
}