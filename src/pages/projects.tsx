import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { useState } from "react";
import { projects } from "@/data/projects";
import { SITE_NAME } from "@/utils/constants";

export default function Projects() {
	const [selectedTech, setSelectedTech] = useState<string[]>([]);

	const filteredProjects =
		selectedTech.length === 0
			? projects
			: projects.filter((project) =>
					project.technologies.some((tech) =>
						selectedTech.includes(tech)
					)
			  );

	return (
		<>
			<Head>
				<title>Projects - {SITE_NAME}</title>
			</Head>
			<div className="min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-grow container mx-auto px-4 py-8 pt-16">
					<h1 className="text-4xl font-bold mb-8">Projects</h1>
					<ProjectFilters
						selected={selectedTech}
						onChange={setSelectedTech}
					/>
					<ProjectGrid projects={filteredProjects} />
				</main>
				<Footer />
			</div>
		</>
	);
}
