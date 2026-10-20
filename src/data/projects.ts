import { Project } from "@/types";

export const projects: Project[] = [
	{
		id: "1",
		title: "TrainSync",
		description:
			"Open source training planner for endurance athletes (running, cycling, swimming, triathlon). FastAPI backend with a planning engine covered by automated tests, a Next.js 16 frontend, and integration with the intervals.icu API. Private for now; coming soon.",
		technologies: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Docker"],
		imageUrl: "./images/projects/nextjs-logo.svg",
	},
	{
		id: "2",
		title: "Personal Portfolio",
		description:
			"A modern portfolio website built to showcase my projects and skills. Features a responsive design, dark mode support, and interactive project cards with detailed information about each project.",
		technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
		imageUrl: "./images/projects/nextjs-logo.svg",
		projectUrl: "https://mrclusterman.github.io/gabriel-miralles/",
		githubUrl: "https://github.com/Mrclusterman/gabriel-miralles",
	},
];
