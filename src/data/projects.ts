import { Project } from "@/types";

export const projects: Project[] = [
	{
		id: "1",
		title: "IPTV_Indexer",
		description:
			"This Node.js project uses Axios and Cheerio to scrape IPTV channel links from a webpage and generate an M3U playlist. It extracts and filters valid stream URLs, creating a custom IPTV playlist with channel names and links for easy streaming.",
		technologies: ["JavaScript", "NodeJS", "Web Scraping Utilities"],
		imageUrl: "./images/projects/nodejs-logo.svg",
		projectUrl: "https://github.com/Mrclusterman/IPTV_Indexer",
		githubUrl: "https://github.com/Mrclusterman/IPTV_Indexer",
	},
	{
		id: "2",
		title: "Acestream Links Converter",
		description:
			"A web application that automatically scrapes and converts Acestream links into M3U playlist format, streamlining the process of creating compatible playlists for media players.",
		technologies: [
			"React",
			"Next.js",
			"Tailwind CSS",
			"TypeScript",
			"Web Scraping Utilities",
		],
		imageUrl: "./images/projects/react-logo.svg",
		projectUrl: "https://mrclusterman.github.io/m3u-scrapper-web/",
		githubUrl:
			"https://github.com/Mrclusterman/m3u-scrapper-web/tree/master",
	},
	{
		id: "3",
		title: "Personal Portfolio",
		description:
			"A modern portfolio website built to showcase my projects and skills. Features a responsive design, dark mode support, and interactive project cards with detailed information about each project.",
		technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
		imageUrl: "./images/projects/nextjs-logo.svg",
		projectUrl: "", // Add your portfolio URL here
		githubUrl: "", // Add your portfolio's GitHub URL here
	},
];
