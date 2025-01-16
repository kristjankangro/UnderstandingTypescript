import {Department} from "./department";

export class ITDepartment extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, "IT osakond");
    }
}