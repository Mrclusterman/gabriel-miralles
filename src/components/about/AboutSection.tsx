import Image from "next/image";

export default function AboutSection() {
	return (
		<section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div className="relative h-[400px] w-full">
					<Image
						src="./images/about-me.jpg"
						alt="About Me"
						fill
						className="rounded-lg object-cover"
					/>
				</div>
				<div>
					<h2 className="text-3xl font-bold mb-6">About Me</h2>
					<div className="space-y-4 text-gray-600 dark:text-gray-400">
						<p>
							Hello! I&apos;m{" "}
							<span className="text-black dark:text-gray-100">
								Gabriel Miralles Álvarez
							</span>
							, a{" "}
							<span className="text-black dark:text-gray-100">
								Full-Stack Developer
							</span>{" "}
							with experience in web application development using
							technologies such as{" "}
							<span className="text-black dark:text-gray-100">
								JavaScript
							</span>
							,{" "}
							<span className="text-black dark:text-gray-100">
								MongoDB
							</span>
							, and&nbsp;
							<span className="text-black dark:text-gray-100">
								Docker
							</span>
							.
						</p>
						<p>
							Specialized in agile work environments{" "}
							<span className="text-black dark:text-gray-100">
								(Scrum)
							</span>
							, focusing on collaboration and implementing new
							features to enhance user experience.
						</p>
						<p>
							Motivated by innovation and constantly learning new
							technologies, I am looking for a team where I can
							further develop my technical skills and contribute
							to challenging projects.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
