import Image from "next/image";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";

// Contacto en filas a tamaño de titular, sin formulario
export default function Contact() {
	return (
		<section className="contact" id="contact" aria-labelledby="contact-title" data-reveal>
			<h2 id="contact-title" className="contact-title">Contact</h2>
			<ul className="contact-rows">
				<li>
					<a href={`mailto:${EMAIL}`}>{EMAIL}</a>
					<Image className="contact-face" src="./images/profile.jpg" alt="Gabriel Miralles" width={800} height={800} />
				</li>
				<li><a href={LINKEDIN_URL}>LinkedIn</a></li>
				<li><a href={GITHUB_URL}>GitHub</a></li>
				<li>Alicante, Spain</li>
				<li className="contact-hello">
					Say hello
					<a href={`mailto:${EMAIL}`} className="round-button" aria-label={`Email ${EMAIL}`}>
						<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
							<path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
						</svg>
					</a>
				</li>
			</ul>
		</section>
	);
}
