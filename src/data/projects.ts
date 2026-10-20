import { Project } from "@/types";

export const projects: Project[] = [
	{
		id: "trainsync",
		title: "TrainSync",
		kind: "Training planner",
		year: "2026",
		description:
			"Open source training planner for endurance athletes: a FastAPI planning engine covered by 40 automated tests, a Next.js 16 frontend and the intervals.icu API. Private for now; coming soon.",
		technologies: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Docker"],
		imageUrl: "./images/projects/trainsync.svg",
	},
	{
		id: "portfolio",
		title: "This portfolio",
		kind: "Personal site",
		year: "2024–2026",
		description:
			"The site you are reading: Next.js and React, exported as static pages and deployed to GitHub Pages with GitHub Actions.",
		technologies: ["Next.js", "React", "TypeScript"],
		imageUrl: "./images/projects/portfolio.jpg",
		projectUrl: "https://mrclusterman.github.io/gabriel-miralles/",
		githubUrl: "https://github.com/Mrclusterman/gabriel-miralles",
	},
];
