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
		get(){
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