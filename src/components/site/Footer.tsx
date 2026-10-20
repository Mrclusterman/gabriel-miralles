import { buttonClasses } from "@/components/ui/Button";

// Cierre y pie en un solo campo invertido; el apellido, entero de ancho, queda recortado por el borde inferior
export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-top">
				<h2 className="footer-invite">Hiring a<br />developer?</h2>
				<a href="./CV_Gabriel_Miralles.pdf" download className={buttonClasses("inverse")}>
					Download my CV
				</a>
			</div>
			<div className="footer-legal">
				<p>
					Photos via Wikimedia Commons:{" "}
					<a href="https://commons.wikimedia.org/wiki/File:Serra_gelada_desde_T%C3%A0rbena.jpg">Juan Carlos</a> (
					<a href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>),{" "}
					<a href="https://commons.wikimedia.org/wiki/File:Coll_de_Rates.jpg">MollySVH</a> (
					<a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>),{" "}
					<a href="https://commons.wikimedia.org/wiki/File:Playa_del_Rac%C3%B3_del_Albir.JPG">Jackrm</a> (public domain).
				</p>
				<p>© 2026 Gabriel Miralles</p>
			</div>
			<p className="footer-wordmark" aria-hidden="true">Miralles</p>
		</footer>
	);
}
