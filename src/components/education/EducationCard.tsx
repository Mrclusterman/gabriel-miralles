import type { Education } from "@/types";

export default function EducationCard({ education }: { education: Education }) {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
			<div className="flex justify-between items-start mb-4">
				<div>
					<h3 className="text-xl font-bold">{education.degree}</h3>
					<p className="text-blue-600 dark:text-blue-400">
						{education.institution}
					</p>
				</div>
				<span className="text-gray-500 dark:text-gray-400">
					{education.period}
				</span>
			</div>
			<p className="text-gray-600 dark:text-gray-300">
				{education.description}
			</p>
		</div>
	);
}
