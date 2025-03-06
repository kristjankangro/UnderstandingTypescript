import {projectState} from "../project-state.ts";

export class ProjectList {
	templateEl: HTMLTemplateElement;
	hostEl: HTMLDivElement;
	element: HTMLElement;
	assignedProjects: any[];

	constructor(private type: "active" | "finished") {
		this.templateEl = document.getElementById('project-list')! as HTMLTemplateElement;
		this.hostEl = document.getElementById('app')! as HTMLDivElement;
		const importedNode = document.importNode(this.templateEl.content, true);
		this.element = importedNode.firstElementChild as HTMLElement;
		this.element.id = `${this.type}-projects`;
		this.assignedProjects = [];
		
		projectState.addListener(
			(projects: any[]) => {
				this.assignedProjects = projects;
				this.renderProjects();
			}
		);
		
		this.attach();
		this.renderContent();
	}
	
	private renderContent() {
		const listId = `${this.type}-projects-list`;
		this.element.querySelector('ul')!.id = listId;
		this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
	}

	private attach(): void {
		this.hostEl.insertAdjacentElement("afterbegin", this.element);
	}

	private renderProjects() {
		const listEl =  document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
		for (const prjItem of this.assignedProjects) {
			const listItem = document.createElement('li');
			listItem.textContent = prjItem.title;
			listEl.appendChild(listItem);
		}
	}
}