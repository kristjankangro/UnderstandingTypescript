import {Department} from "./department";

export class AccountingDepartment extends Department {

    private _lastReport: string ="";
    
    get lastReport(): string {
        if (this._lastReport === null) { throw Error('No report for Department'); }
        return this._lastReport;
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