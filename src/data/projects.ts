import { Project } from "@/types";

// Proyectos que no salen de GitHub (privados). Los públicos llegan solos desde src/data/github.ts
export const projects: Project[] = [
	{
		id: "trainsync",
		title: "TrainSync",
		kind: "Training planner",
		year: "2026",
		description:
			"Open source training planner for endurance athletes: a FastAPI planning engine covered by 40 automated tests, a Next.js 16 frontend and the intervals.icu API. Private for now; coming soon.",
		technologies: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Docker"],
		imageUrl: "./images/projects/trainsync.jpg",
		imageAlt: "the Today screen with form, fitness, HRV and sleep, and the planned threshold session (sample data)",
	},
];
