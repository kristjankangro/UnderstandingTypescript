import {autobind} from "../Common/autobind.ts";
import {Validatable, validate} from "../Common/validation.ts";
import {projectState} from "../project-state.ts";

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

	private gatherUserInput(): [string, string, number] | undefined {

		const title = this.titleInputEl.value;
		const desc = this.descInputEl.value;
		const people = this.peopleInputEl.value;

		const titleInput: Validatable = {value: title, required: true, minLength: 5};
		const descInput: Validatable = {value: desc, required: true, minLength: 5};
		const peopleInput: Validatable = {value: +people, required: true, min: 1};
		if (!(validate(titleInput) && validate(descInput) && validate(peopleInput))) {
			alert("Please enter a valid data.");
			return;
		}

		return [title, desc, +people];
	}

	private clearInputs(): void {
		this.titleInputEl.value = "";
		this.descInputEl.value = "";
		this.peopleInputEl.value = "";
	}

	@autobind
	private submitHandler(evt: Event): void {
		evt.preventDefault();
		const userInput = this.gatherUserInput();
		if (Array.isArray(userInput)) {
			const [title, desc, people] = userInput;
			document.getElementById(``)
			projectState.addProject(title, desc, people);
			this.clearInputs();
		}
	}

	private configure() {
		this.element.addEventListener('submit', this.submitHandler.bind(this));
	}

	private attach(): void {
		this.hostEl.insertAdjacentElement("afterbegin", this.element);
	}
}