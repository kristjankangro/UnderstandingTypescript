import {Department} from "./Department.ts";

export class ITDepartment extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, "IT osakond");
    }

    describe(): void {
    }
    
}