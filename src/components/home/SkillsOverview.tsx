import { Skill } from "@/types";
import Card from "@/components/ui/Card";

const skills: Skill[] = [
	{ name: "React", level: 60, category: "frontend" },
	{ name: "NextJS", level: 60, category: "frontend" },
	{ name: "TypeScript", level: 75, category: "frontend" },
	{ name: "Angular", level: 75, category: "frontend" },
	{ name: "Node.js", level: 80, category: "backend" },
	{ name: "Spring Boot", level: 50, category: "backend" },
	{ name: "MongoDB", level: 50, category: "backend" },
	{ name: "MySQL", level: 70, category: "backend" },
	{ name: "JavaScript", level: 60, category: "technologies" },
	{ name: "Java", level: 25, category: "technologies" },
	{ name: "C#", level: 25, category: "technologies" },
	{ name: "Python", level: 20, category: "technologies" },
	{ name: "Git", level: 70, category: "tools" },
	{ name: "GitHub", level: 70, category: "tools" },
	{ name: "Docker", level: 60, category: "tools" },
	{ name: "Postman", level: 60, category: "tools" },
];

export default function SkillsOverview() {
	const categories = {
		frontend: "Frontend Development",
		backend: "Backend Development",
		tools: "Tools",
		technologies: "Technologies",
	};

	const categoryColors = {
		frontend: "bg-blue-100 text-blue-800",
		backend: "bg-emerald-100 text-emerald-800",
		tools: "bg-purple-100 text-purple-800",
		technologies: "bg-amber-100 text-amber-800",
	};

	const groupedSkills = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {} as Record<string, Skill[]>);

	return (
		<section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold mb-4 text-center">
					Skills & Expertise
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{Object.entries(groupedSkills).map(([category, skills]) => (
						<Card
							key={category}
							className="p-6 hover:shadow-lg transition-shadow duration-300"
						>
							<div className="flex items-center mb-6">
								<h3 className="text-xl font-semibold">
									{
										categories[
											category as keyof typeof categories
										]
									}
								</h3>
								<span
									className={`ml-auto px-3 py-1 rounded-full text-sm ${
										categoryColors[
											category as keyof typeof categoryColors
										]
									}`}
								>
									{skills.length} skills
								</span>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skills.map((skill) => (
									<div
										key={skill.name}
										className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-300"
									>
										<div className="flex flex-col">
											<span className="text-lg font-medium mb-2">
												{skill.name}
											</span>
											<div className="text-sm text-gray-600 dark:text-gray-400">
												{skill.level >= 95
													? "Master"
													: skill.level >= 85
													? "Expert"
													: skill.level >= 75
													? "Advanced"
													: skill.level >= 60
													? "Intermediate"
													: skill.level >= 45
													? "Proficient"
													: skill.level >= 30
													? "Beginner"
													: "Novice"}
											</div>
										</div>
									</div>
								))}
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
