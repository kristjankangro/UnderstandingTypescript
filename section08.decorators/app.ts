function Logger(log: string) {
	return function (constructor: Function) {
		console.log("logger..." + log);
		console.log(constructor);
	}
}

function WithTemplate(template: string, hookId: string) {
	return function <T extends { new(...args: any[]): { name: string } }>(
		origConstructor: T) {

		return class extends origConstructor {
			constructor(..._: any[]) {
				super();
				console.log("rendering template")
				const element = document.getElementById(hookId);
				if (element) {
					element.innerHTML = template;
					element.querySelector('h1')!.textContent = this.name;
				}
			}
		};
	}
}

@Logger('LOGGING')
@WithTemplate("<h1>My person object</h1>", "app")
class Person {
	name: string;

	constructor() {
		this.name = "Max";
	}
}

const person: Person = new Person();

console.log(person);

// ---
function Log(target: any, propertyName: string | Symbol) {
	console.log(`property decorator`);
	console.log(target, propertyName);

}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log(`property decorator accessoe: `, target, name, descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
	console.log(`method decorator`);
	console.log(target, name, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
	console.log(`param decorator`);
	console.log(target, name, position);
}

class Product {
	@Log
	title: string;
	private _price: number;

	@Log2
	set price(value: number) {
		if (value > 0) this._price = value;
		else throw new Error(`${value} is not a valid price`);
	}

	constructor(title: string, price: number) {
		this.title = title;
		this._price = price;
	}

	@Log3
	getPrice(@Log4 tax: number) {
		return this._price + tax;
	}
}

const product = new Product("Book", 19)
const product2 = new Product("Book2", 29)

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const origMethod = descriptor.value;
	const propertyDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = origMethod.bind(this); //this is binding
			return boundFn;
		}
	};
	return propertyDescriptor;
}

class Printer {
	message: string = "this works";

	@Autobind
	showMessage() {
		console.log(this.message)
	}
}

const p = new Printer();
p.showMessage();

const btn = document.querySelector("button");

// btn.addEventListener("click", p.showMessage.bind(p));
btn.addEventListener("click", p.showMessage);

// ---

interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[]; // ['required', 'positive']
	};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
	};
}

function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
	};
}

function validate(obj: any) {
	const objValidatorConfig = registeredValidators[obj.constructor.name];
	if (!objValidatorConfig) {
		return true;
	}
	let isValid = true;
	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid && !!obj[prop];
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}
	return isValid;
}

class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
	event.preventDefault();
	const titleEl = document.getElementById('title') as HTMLInputElement;
	const priceEl = document.getElementById('price') as HTMLInputElement;

	const title = titleEl.value;
	const price = +priceEl.value;

	const createdCourse = new Course(title, price);

	if (!validate(createdCourse)) {
		alert('Invalid input, please try again!');
		return;
	}
	console.log(createdCourse);
});
