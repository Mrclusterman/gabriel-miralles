import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FeaturedProjects() {
	// Get only the first 3 projects for the featured section
	const featuredProjects = projects.slice(0, 3);

	return (
		<section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">
						Featured Projects
					</h2>
					<p className="text-gray-600 dark:text-gray-300">
						Some of my recent work that I&apos;m proud of
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{featuredProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>

				<div className="text-center">
					<Link href="/projects">
						<Button variant="outline" size="lg">
							View All Projects
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
