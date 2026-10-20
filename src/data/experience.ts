import { Entry } from "@/types";

// Mismo contenido que el CV (public/CV_Gabriel_Miralles.pdf), donde están las descripciones completas
export const experiences: Entry[] = [
	{
		id: "tutor",
		title: "Programming tutor",
		place: "Private lessons, DAM student",
		period: "Sep 2024 – Jun 2025",
		technologies: ["Java", "C#", "MySQL"],
	},
	{
		id: "gnuinux",
		title: "Full stack developer",
		place: "Gnuinux Software, vehicle rental client",
		period: "Jan 2023 – Feb 2024",
		technologies: ["JavaScript", "MongoDB", "Docker", "Postman"],
	},
	{
		id: "alten",
		title: "Junior software consultant",
		place: "Alten Spain",
		period: "Jul 2022 – Oct 2022",
		technologies: ["Java", "Spring Boot"],
	},
	{
		id: "nttdata",
		title: "Frontend developer (internship)",
		place: "NTT DATA",
		period: "Mar 2022 – Jun 2022",
		technologies: ["Angular", "TypeScript", "Postman"],
	},
];
