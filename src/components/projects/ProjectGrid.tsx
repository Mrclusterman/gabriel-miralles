import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
	projects: Project[];
	className?: string;
}

export default function ProjectGrid({
	projects,
	className = "",
}: ProjectGridProps) {
	return (
		<div
			className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
		>
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
}
