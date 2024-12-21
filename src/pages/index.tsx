import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsOverview from "@/components/home/SkillsOverview";
import { SITE_NAME, SITE_DESCRIPTION } from "@/utils/constants";

export default function Home() {
	return (
		<>
			<Head>
				<title>{SITE_NAME}</title>
				<meta name="description" content={SITE_DESCRIPTION} />
			</Head>
			<div className="min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-grow">
					<Hero />
					<SkillsOverview />
					<FeaturedProjects />
				</main>
				<Footer />
			</div>
		</>
	);
}
