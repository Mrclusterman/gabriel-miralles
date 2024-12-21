import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import ExperienceCard from "@/components/experience/ExperienceCard";
import EducationCard from "@/components/education/EducationCard";
import type { Experience } from "@/types";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import Footer from "@/components/layout/Footer";
export default function Experience() {
	return (
		<>
			<Head>
				<title>Experience & Education - Gabriel Miralles</title>
				<meta
					name="description"
					content="My professional experience and education"
				/>
			</Head>
			<div className="min-h-screen bg-white dark:bg-gray-900">
				<Navbar />
				<main className="pt-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto py-12">
						<section className="mb-16">
							<h2 className="text-3xl font-bold mb-8">
								Professional Experience
							</h2>
							{experiences.map((experience) => (
								<ExperienceCard
									key={experience.id}
									experience={experience}
								/>
							))}
						</section>

						<section>
							<h2 className="text-3xl font-bold mb-8">
								Education
							</h2>
							{education.map((edu) => (
								<EducationCard key={edu.id} education={edu} />
							))}
						</section>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}
