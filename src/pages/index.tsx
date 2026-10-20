import Head from "next/head";
import { useEffect, useState } from "react";
import Hero from "@/components/site/Hero";
import Work from "@/components/site/Work";
import Lineup from "@/components/site/Lineup";
import About from "@/components/site/About";
import Footer from "@/components/site/Footer";
import { SITE_NAME, SITE_DESCRIPTION } from "@/utils/constants";
import { projects as privateProjects } from "@/data/projects";
import { githubProjects } from "@/data/github";
import { Project } from "@/types";

// Se lee GitHub al compilar: un repo público nuevo con .github/portfolio.json aparece en el siguiente despliegue
export async function getStaticProps() {
	const fromGithub = await githubProjects();
	const ids = new Set(fromGithub.map((project) => project.id));
	return { props: { projects: [...privateProjects.filter((project) => !ids.has(project.id)), ...fromGithub] } };
}

// Entrada de cada sección al aparecer en pantalla (las partes se escalonan en CSS)
function useReveal() {
	useEffect(() => {
		const sections = document.querySelectorAll("[data-reveal]");
		if (!("IntersectionObserver" in window)) {
			sections.forEach((s) => s.classList.add("is-in"));
			return;
		}
		const observer = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-in");
						observer.unobserve(entry.target);
					}
				}),
			{ rootMargin: "0px 0px -15% 0px" }
		);
		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);
}

export default function Home({ projects }: { projects: Project[] }) {
	// Tecnología elegida en el filtro: atenúa los puestos y proyectos que no la usan
	const [tech, setTech] = useState<string | null>(null);
	useReveal();

	return (
		<>
			<Head>
				<title>{SITE_NAME}</title>
				<meta name="description" content={SITE_DESCRIPTION} />
			</Head>
			<Hero />
			<main>
				<Work projects={projects} tech={tech} />
				<Lineup projects={projects} tech={tech} onTech={setTech} />
				<About />
			</main>
			<Footer />
		</>
	);
}
