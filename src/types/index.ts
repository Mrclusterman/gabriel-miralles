export interface Project {
	id: string;
	title: string;
	kind: string;
	year: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	projectUrl?: string; // sin enlaces: proyecto privado
	githubUrl?: string;
}

// Una fila de la trayectoria (puesto o formación)
export interface Entry {
	id: string;
	title: string;
	place: string;
	period: string;
	technologies: string[];
}
