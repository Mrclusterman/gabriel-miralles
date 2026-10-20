import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";
import { SITE_NAME } from "@/utils/constants";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects - {SITE_NAME}</title>
			</Head>
			<div className="min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-grow container mx-auto px-4 pt-24 pb-12">
					<h1 className="text-4xl font-bold mb-8">Projects</h1>
					<ProjectGrid projects={projects} />
				</main>
				<Footer />
			</div>
		</>
	);
}
