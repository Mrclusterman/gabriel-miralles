import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

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
						A Full-Stack Developer with a knack for crafting
						beautiful and functional web applications. With
						expertise in technologies like JavaScript, Angular, and
						MongoDB, I specialize in delivering innovative solutions
						in agile environments. Whether enhancing user
						experiences or optimizing web platforms, I thrive on
						tackling challenges and constantly learning new skills.
						Let’s build something extraordinary together.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
						<Link href="mailto:gabrielmirallesalvarez@gmail.com">
							<Button variant="primary" size="lg">
								Contact Me
							</Button>
						</Link>
						<a
							href="/Gabriel_Miralles_FullStack_Developer.pdf"
							download
						>
							<Button variant="outline" size="lg">
								Download CV
							</Button>
						</a>
					</div>
				</div>
				<div className="flex-1 relative">
					<div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
						<Image
							src="/images/profile.jpg"
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
