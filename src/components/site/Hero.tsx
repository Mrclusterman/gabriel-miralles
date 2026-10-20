import { buttonClasses } from "@/components/ui/Button";

export default function Hero() {
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

			<div className="hero-foot">
				<p>Full stack developer in Alicante, looking for a development role.</p>
				<a href="./CV_Gabriel_Miralles.pdf" download className={buttonClasses()}>
					Download CV
				</a>
			</div>
		</header>
	);
}
