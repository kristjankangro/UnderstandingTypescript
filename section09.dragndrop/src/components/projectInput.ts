import {autobind} from "../Common/autobind.ts";

export class ProjectInput {
	templateEl: HTMLTemplateElement;
	hostEl: HTMLDivElement;
	element: HTMLFormElement;

	titleInputEl: HTMLInputElement;
	descInputEl: HTMLInputElement;
	peopleInputEl: HTMLInputElement;

	constructor() {
		this.templateEl = document.getElementById("project-input")! as HTMLTemplateElement;
		this.hostEl = document.getElementById("app")! as HTMLDivElement;

		const importedNode = document.importNode(this.templateEl.content, true);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = 'user-input';
		this.titleInputEl = this.element.querySelector('#title') as HTMLInputElement;
		this.descInputEl = this.element.querySelector('#description') as HTMLInputElement;
		this.peopleInputEl = this.element.querySelector('#people') as HTMLInputElement;
		this.configure();
		this.attach();
	}

	@autobind
	private submitHandler(evt: Event): void {
		evt.preventDefault();
		console.log(this.titleInputEl.value);
	}

	private configure() {
		this.element.addEventListener('submit', this.submitHandler.bind(this));
	}

	private attach(): void {
		this.hostEl.insertAdjacentElement("afterbegin", this.element);
	}
}