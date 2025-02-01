class ProjectInput {
	templateEl: HTMLTemplateElement;
	hostEl: HTMLDivElement;
	element: HTMLFormElement;

	constructor() {
		this.templateEl = document.getElementById("project-input")! as HTMLTemplateElement;
		this.hostEl = document.getElementById("app")! as HTMLDivElement;
		
		const importedNode = document.importNode(this.templateEl.content, true);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		
		this.attach();
	}
	
	private attach(): void {
		this.hostEl.insertAdjacentElement("afterbegin", this.element);
	}
}
const projectInput = new ProjectInput();
console.log(projectInput);