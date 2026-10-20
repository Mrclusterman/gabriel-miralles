import { Entry } from "@/types";

// Mismo contenido que el CV (public/CV_Gabriel_Miralles.pdf), donde están las descripciones completas
export const experiences: Entry[] = [
	{
		id: "tutor",
		title: "Programming tutor",
		place: "Private lessons, DAM student",
		period: "Sep 2024 – Jun 2025",
		summary:
			"Review lessons throughout the school year, with materials and exercises tailored to the student.",
		technologies: ["Java", "C#", "MySQL"],
	},
	{
		id: "gnuinux",
		title: "Full stack developer",
		place: "Gnuinux Software, vehicle rental client",
		period: "Jan 2023 – Feb 2024",
		summary:
			"Built and optimized features of a web platform for an international vehicle rental client, tested its APIs with Postman and worked in a Kanban team.",
		technologies: ["JavaScript", "MongoDB", "Docker", "Postman"],
	},
	{
		id: "alten",
		title: "Junior software consultant",
		place: "Alten Spain",
		period: "Jul 2022 – Oct 2022",
		summary:
			"Learned and applied Spring Boot in Java projects and took part in system integration for clients.",
		technologies: ["Java", "Spring Boot"],
	},
	{
		id: "nttdata",
		title: "Frontend developer (internship)",
		place: "NTT DATA",
		period: "Mar 2022 – Jun 2022",
		summary:
			"Improved the performance of Angular interfaces, tested endpoints with Postman and worked with a shared GitHub workflow.",
		technologies: ["Angular", "TypeScript", "Postman"],
	},
];
