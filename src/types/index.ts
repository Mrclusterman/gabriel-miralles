export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	projectUrl: string;
	githubUrl: string;
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
	level: number; // 0-100
	category: "frontend" | "backend" | "tools" | "technologies";
}
