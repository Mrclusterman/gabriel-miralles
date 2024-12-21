import type { Experience } from "@/types";

export default function ExperienceCard({
	experience,
}: {
	experience: Experience;
}) {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
			<div className="flex justify-between items-start mb-4">
				<div>
					<h3 className="text-xl font-bold">{experience.position}</h3>
					<p className="text-blue-600 dark:text-blue-400">
						{experience.company}
					</p>
				</div>
				<span className="text-gray-500 dark:text-gray-400">
					{experience.period}
				</span>
			</div>
			<ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-300">
				{experience.description.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<div className="flex flex-wrap gap-2">
				{experience.technologies.map((tech) => (
					<span
						key={tech}
						className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}
