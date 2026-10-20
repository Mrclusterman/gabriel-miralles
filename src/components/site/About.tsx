// Texto a dos columnas con los datos que busca quien escanea resaltados en colores de la paleta
export default function About() {
	return (
		<section className="about" id="about" data-reveal>
			<h2 className="about-title">About me</h2>
			<div className="about-text">
				<p>
					<strong>I&apos;m Gabriel</strong>, a full stack developer from <mark className="hl-1">Alicante, Spain</mark>.
					I&apos;ve worked on web platforms with <mark className="hl-2">Angular, Node.js and MongoDB</mark> at{" "}
					<mark className="hl-3">Gnuinux Software</mark>, Alten and NTT DATA, and I like understanding a product end to
					end, from the data model to the interface.
				</p>
				<p>
					I also enjoy explaining what I know: for a school year I tutored a student of the{" "}
					<mark className="hl-1">DAM higher vocational degree</mark> in Java, C# and MySQL.
				</p>
				<p>
					Outside of code I&apos;m an endurance athlete. I ride, run and do kickboxing, and I&apos;m working towards my
					first <mark className="hl-2">Olympic-distance triathlon</mark>. That&apos;s where TrainSync comes from: I
					wanted training plans that adapt to my own data, so I&apos;m building the tool myself.
				</p>
				<p>
					<a href="#contact" className="about-cta">
						<mark className="hl-strong">If you&apos;re hiring, write to me.</mark>
					</a>
				</p>
			</div>
		</section>
	);
}
