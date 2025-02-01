//generics

// module 95  built in
const names: Array<string> = [];

const promise: Promise<string> = new Promise(
	(resolve, reject) => {
		setTimeout(() => {
			resolve('Done');
		}, 2000)
	}
);

promise.then(data => data.split(" "))

// module 96 functions
//module 97 constraints

function merge<T extends object, U extends object>(o1: T, o2: U): T & U {
	return Object.assign(o1, o2);
}

const a = merge({name: "Test", startDate: new Date("2021-01-12")}, {age: 44});

console.log("constraint " + a.age)

interface WithLength {
	length: number;
}

function countAndPrintNoArr<T extends WithLength>(a: T): [T, string] {
	let descrMessage = "aaa";
	if (a.length < 1) {
		console.log(descrMessage);
	}
	return [a, descrMessage];
}

function countAndPrintArrow<T extends WithLength>(a: T): [T, string] {
	let descrMessage = "aaa";
	if (a.length < 1) {
		console.log(descrMessage);
	}
	return [a, descrMessage];
}

console.log("generic func " + countAndPrintNoArr("111"));
console.log("generic func " + countAndPrintArrow("222"));


//module 99 key of
const extractKeyOf = <T extends object, U extends keyof T>(obj: T, key: U) =>
	"Value " + obj[key];

// extractKeyOf({name: "Max"}, "age")
extractKeyOf({name: "Max"}, "name")

//module 100 generic classes
class DataStorage<T> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) == -1) return;
		
		this.data.splice(this.data.indexOf(item), 1);
	}

	getList(): T[] {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem("a")
textStorage.addItem("b")
textStorage.addItem("c")
textStorage.removeItem("b")

console.log("Generic class: " + textStorage.getList());



const objStorage = new DataStorage<object>();
objStorage.addItem({name: "a"})
objStorage.addItem({name: "b"})
objStorage.addItem({name: "c"})
objStorage.removeItem({name: "b"})

console.log("Generic class: " + objStorage.getList());

//module 102 generic utilities

interface CourseGoal{
	title: string;
	description: string;
	completeUntil: Date;
}

function createGoal(title: string, description: string, completeUntil: Date): CourseGoal {
	let goal: Partial<CourseGoal> = {};
	goal.title = title;
	goal.description = description;
	goal.completeUntil = completeUntil;
	return goal as CourseGoal;
}

const names2: Readonly<string[]> = ["Max", "Sports"];
// names2.push("Manu"); not allowed
// names2.pop("Manu"); not allowed
console.log(names2);

