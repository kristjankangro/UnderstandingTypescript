export class ProjectState {
	private listeners: Function[] = [];
	private projects: any[] = [];
	private static instance: ProjectState;
	
	private constructor() {
	}
	
	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ProjectState();
		return this.instance;
	}
	
	addListener(listenerFn: Function) {
		this.listeners.push(listenerFn);
	}
	
	addProject(title: string, description: string, people: number) {
		const project = {
			id: Math.random().toString(),
			title,
			description,
			people,
		};
		this.projects.push(project);
		for (const listenerFn of this.listeners) {
			listenerFn(this.projects);
		}
	}
}

export const projectState = ProjectState.getInstance();