import { Github, Linkedin, Mail } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";

export default function Footer() {
	return (
		<footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex flex-col items-center">
					<div className="flex space-x-6">
						<a
							href={GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
						>
							<Github size={24} />
						</a>
						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
						>
							<Linkedin size={24} />
						</a>
						<a
							href="mailto:gabrielmirallesalvarez@gmail.com"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
						>
							<Mail size={24} />
						</a>
					</div>
					<p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
						© {new Date().getFullYear()} Gabriel Miralles. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
