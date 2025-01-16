import {Department} from "./department";

export class AccountingDepartment extends Department {

    constructor(id: number, private accountants: string[]) {
        super(id, "AccountingDepartment");
    }

    getFirstAccountatn(): string {
        return this.accountants[0];
    }
}