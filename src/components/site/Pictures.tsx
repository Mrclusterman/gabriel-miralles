import Image from "next/image";

// Banda a sangre: la Serra Gelada, la vista de casa. Se acerca despacio al hacer scroll.
export function HomeView() {
	return (
		<figure className="band" data-reveal>
			<div className="band-frame">
				<Image
					src="./images/world/serra-gelada-desde-tarbena.jpg"
					alt="The Serra Gelada and the bay of Benidorm seen from Tàrbena"
					width={1800}
					height={1068}
					sizes="100vw"
				/>
			</div>
			<figcaption>
				<span>The Serra Gelada seen from Tàrbena. I live at its foot, in l&apos;Alfàs del Pi.</span>
				<span>Photo: Juan Carlos, CC BY-SA 2.0</span>
			</figcaption>
		</figure>
	);
}

// Fotos personales y los lugares donde entreno, tras el texto de About
export function Places() {
	return (
		<section className="places" aria-labelledby="places-title" data-reveal>
			<h2 id="places-title" className="places-title">Where I train</h2>
			<figure className="places-main">
				<Image
					src="./images/world/coll-de-rates.jpg"
					alt="The road climbing to Coll de Rates between pine trees"
					width={1200}
					height={1422}
				/>
				<figcaption>Coll de Rates, one of the climbs near home.</figcaption>
			</figure>
			<figure className="places-side">
				<Image src="./images/about-me.jpg" alt="Gabriel Miralles on a canal street" width={1600} height={1067} />
				<figcaption>Me.</figcaption>
			</figure>
			<figure className="places-side">
				<Image
					src="./images/world/playa-del-raco-del-albir.jpg"
					alt="The pebble beach of Racó de l'Albir with a rocky headland on the horizon"
					width={1600}
					height={1200}
				/>
				<figcaption>Racó de l&apos;Albir beach.</figcaption>
			</figure>
		</section>
	);
}
