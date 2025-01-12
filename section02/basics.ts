enum RoleType {
    Admin,
    User,
    Limited 
}

let person: { 
    name: string,
    birthYear: number,
    hobbies: string[],
    roleTuple: [number, string],
    roleEnum: RoleType
} = {
    name: "John",
    birthYear: 2020,
    hobbies: ["boxing", "bjj"],
    roleTuple: [2, 'author'],
    roleEnum: RoleType.Admin
}

console.log(person.name);
for (let h of person.hobbies) {
    console.log(h);
}