export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	projectUrl?: string; // sin enlaces: proyecto privado
	githubUrl?: string;
}

export interface Experience {
	id: string;
	company: string;
	position: string;
	period: string;
	description: string[];
	technologies: string[];
}

export interface Education {
	id: string;
	institution: string;
	degree: string;
	period: string;
	description: string;
}

export interface Skill {
	name: string;
	category: "frontend" | "backend" | "tools" | "technologies";
}
