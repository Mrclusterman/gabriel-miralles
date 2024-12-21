// src/components/projects/ProjectFilters.tsx
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";

interface ProjectFiltersProps {
	selected: string[];
	onChange: (filters: string[]) => void;
}

export default function ProjectFilters({
	selected,
	onChange,
}: ProjectFiltersProps) {
	// Get unique technologies from all projects
	const [technologies, setTechnologies] = useState<string[]>([]);

	useEffect(() => {
		const techSet = new Set<string>();
		projects.forEach((project) => {
			project.technologies.forEach((tech) => techSet.add(tech));
		});
		setTechnologies(Array.from(techSet).sort());
	}, []);

	const toggleTechnology = (tech: string) => {
		if (selected.includes(tech)) {
			onChange(selected.filter((t) => t !== tech));
		} else {
			onChange([...selected, tech]);
		}
	};

	const clearFilters = () => {
		onChange([]);
	};

	return (
		<div className="mb-8">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-lg font-semibold">Filter by Technology</h2>
				{selected.length > 0 && (
					<button
						onClick={clearFilters}
						className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
					>
						Clear filters
					</button>
				)}
			</div>

			<div className="flex flex-wrap gap-2">
				{technologies.map((tech) => (
					<button
						key={tech}
						onClick={() => toggleTechnology(tech)}
						className={`
              transition-all duration-200 ease-in-out
              ${
					selected.includes(tech)
						? "bg-blue-600 text-white hover:bg-blue-700"
						: "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
				}
              px-3 py-1.5 rounded-full text-sm font-medium
            `}
					>
						{tech}
						<span className="ml-1">
							{selected.includes(tech) && "×"}
						</span>
					</button>
				))}
			</div>

			{selected.length > 0 && (
				<div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
					Showing projects with: {selected.join(", ")}
				</div>
			)}
		</div>
	);
}
