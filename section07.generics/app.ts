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

function merge<T extends  object, U extends object>(o1: T, o2: U): T & U {
	return Object.assign(o1, o2);
}

const a = merge({name: "Test", startDate: new Date("2021-01-12")}, {age: 44});

console.log(a.age)

interface WithLength{
	length: number;
}

function countAndPrintNoArr<T extends WithLength>(a: T) : [T, string] {
	let descrMessage = "aaa";
	if (a.length < 1) {
		console.log(descrMessage);
	}
	return [a, descrMessage];
}

function countAndPrintArrow<T extends WithLength>(a: T) : [T, string] {
	let descrMessage = "aaa";
	if (a.length < 1) {
		console.log(descrMessage);
	}
	return [a, descrMessage];
}

console.log(countAndPrintNoArr("111"));
console.log(countAndPrintArrow("222"));


