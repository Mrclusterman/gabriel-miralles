import { buttonClasses } from "@/components/ui/Button";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";

// Cierre y pie en un solo campo invertido; el apellido queda recortado por el borde inferior
export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div>
					<h2 className="footer-invite">Hiring a<br />developer?</h2>
					<a href={`mailto:${EMAIL}`} className={buttonClasses("inverse")}>Email me</a>
				</div>
				<ul className="footer-links">
					<li><a href="./CV_Gabriel_Miralles.pdf" download>CV (PDF)</a></li>
					<li><a href={LINKEDIN_URL}>LinkedIn</a></li>
					<li><a href={GITHUB_URL}>GitHub</a></li>
				</ul>
			</div>
			<p className="footer-credits">
				Pictures: <a href="https://commons.wikimedia.org/wiki/File:Serra_gelada_desde_T%C3%A0rbena.jpg">“Serra gelada desde Tàrbena”</a> by Juan Carlos,{" "}
				<a href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>;{" "}
				<a href="https://commons.wikimedia.org/wiki/File:Coll_de_Rates.jpg">“Coll de Rates”</a> by MollySVH,{" "}
				<a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>;{" "}
				<a href="https://commons.wikimedia.org/wiki/File:Playa_del_Rac%C3%B3_del_Albir.JPG">“Playa del Racó del Albir”</a> by Jackrm, public
				domain. All via Wikimedia Commons. © 2026 Gabriel Miralles.
			</p>
			<p className="footer-wordmark" aria-hidden="true">Miralles</p>
		</footer>
	);
}
