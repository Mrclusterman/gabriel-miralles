import Image from "next/image";
import { buttonClasses } from "@/components/ui/Button";

export default function Hero() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
				<div className="flex-1 text-center md:text-left">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Hi, I&apos;m{" "}
						<span className="text-blue-600 dark:text-blue-400">
							Gabriel Miralles
						</span>
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
						Full Stack Developer based in Alicante, Spain. I&apos;ve
						built web platforms with Angular, Node.js and MongoDB at
						Gnuinux Software, Alten and NTT DATA, and I keep building
						with Next.js and Python (FastAPI) on my own projects.
						Looking for a development role, hybrid or remote.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
						<a
							href="mailto:gabrielmirallesalvarez@gmail.com"
							className={buttonClasses("primary", "lg")}
						>
							Contact Me
						</a>
						<a
							href="./CV_Gabriel_Miralles.pdf"
							download
							className={buttonClasses("outline", "lg")}
						>
							Download CV
						</a>
					</div>
				</div>
				<div className="flex-1 relative">
					<div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
						<Image
							src="./images/profile.jpg"
							alt="Gabriel Miralles"
							fill
							className="rounded-full object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
