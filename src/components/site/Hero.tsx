import { useEffect, useRef } from "react";
import { buttonClasses } from "@/components/ui/Button";

export default function Hero() {
	const video = useRef<HTMLVideoElement>(null);
	// Quien pide menos movimiento ve la imagen fija
	useEffect(() => {
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) video.current?.pause();
	}, []);

	return (
		<header className="hero" id="top">
			<nav className="hero-nav" aria-label="Main">
				<a href="#top" className="monogram" aria-label="Gabriel Miralles, back to top">
					GM
				</a>
				<ul>
					<li className="wide-only"><a href="#work">Work</a></li>
					<li className="wide-only"><a href="#experience">Experience</a></li>
					<li className="wide-only"><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>

			<h1 className="hero-name lines">
				<span className="line"><span data-line style={{ "--i": 0 } as React.CSSProperties}>Gabriel</span></span>
				<span className="line"><span data-line style={{ "--i": 1 } as React.CSSProperties}>Miralles</span></span>
			</h1>

			<video
				ref={video}
				className="hero-photo"
				src="./images/bike.mp4"
				poster="./images/bike-poster.jpg"
				width={600}
				height={800}
				autoPlay
				muted
				loop
				playsInline
				aria-label="Gabriel Miralles riding a green road bike up a hill towards the camera, with the sea behind"
			/>

			<div className="hero-foot">
				<p>Full stack developer in Alicante, looking for a development role.</p>
				<a href="./CV_Gabriel_Miralles.pdf" download className={buttonClasses()}>
					Download CV
				</a>
			</div>
		</header>
	);
}
