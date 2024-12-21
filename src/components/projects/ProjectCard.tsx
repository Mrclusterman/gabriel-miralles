import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import Badge from "@/components/ui/Badge";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
			<div className="relative h-48 w-full">
				<Image
					src={project.imageUrl}
					alt={project.title}
					fill
					className="object-contain p-4" // Added padding and changed to object-contain
					style={{ backgroundColor: "transparent" }} // Ensure transparent background
				/>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-bold mb-2">{project.title}</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-4">
					{project.description}
				</p>
				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.map((tech) => (
						<Badge key={tech} text={tech} />
					))}
				</div>
				<div className="flex justify-end space-x-4">
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
					>
						<Github className="h-6 w-6" />
					</a>
					<a
						href={project.projectUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
					>
						<ExternalLink className="h-6 w-6" />
					</a>
				</div>
			</div>
		</div>
	);
}
