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
							I&apos;m Gabriel, a Full Stack Developer from Alicante,
							Spain. I&apos;ve worked on web platforms with Angular,
							Node.js and MongoDB at Gnuinux Software, Alten and NTT
							DATA, and I like understanding a product end to end,
							from the data model to the interface.
						</p>
						<p>
							I also enjoy explaining what I know: for a school year I
							tutored a student of the DAM higher vocational degree in
							Java, C# and MySQL.
						</p>
						<p>
							Outside of code I&apos;m an endurance athlete. I ride,
							run and do kickboxing, and I&apos;m working towards my
							first Olympic-distance triathlon. That&apos;s where
							TrainSync comes from: I wanted training plans that adapt
							to my own data, so I&apos;m building the tool myself.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
