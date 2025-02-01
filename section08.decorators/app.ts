function Logger() {

	return function (constructor: Function) {
		console.log("logger...");
		console.log(constructor);
	}
}

function WithTemplate(name: string, hookId: string) {
	return function (constructor: any) {
		const p = new constructor();
		const element = document.getElementById(hookId);
		if (element) {
			element.innerHTML = name;
			element.querySelector('h1')!.textContent = p.name;
		}
	}
}

// @Logger()
@WithTemplate("<h1>My person object</h1>", "app")
class Person {
	name: string;

	constructor() {
		this.name = "Max";
	}
}

const person: Person = new Person();