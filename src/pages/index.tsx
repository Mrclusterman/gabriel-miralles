import Head from "next/head";
import { useEffect, useState } from "react";
import Hero from "@/components/site/Hero";
import Work from "@/components/site/Work";
import Lineup from "@/components/site/Lineup";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { HomeView, Places } from "@/components/site/Pictures";
import { SITE_NAME, SITE_DESCRIPTION } from "@/utils/constants";

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

export default function Home() {
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
				<Work tech={tech} />
				<HomeView />
				<Lineup tech={tech} onTech={setTech} />
				<About />
				<Places />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
