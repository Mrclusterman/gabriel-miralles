import Head from "next/head";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/about/AboutSection";

export default function About() {
	return (
		<>
			<Head>
				<title>About Me - Gabriel</title>
				<meta
					name="description"
					content="Learn more about my background and experience"
				/>
			</Head>
			<div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
				<Navbar />
				<main className="flex-grow pt-16">
					<AboutSection />
				</main>
				<Footer />
			</div>
		</>
	);
}
