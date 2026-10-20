import Image from "next/image";
import { buttonClasses } from "@/components/ui/Button";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";

// Cierre: invitación, contacto y CV en un solo campo
export default function Footer() {
	return (
		<footer className="footer" id="contact">
			<div className="footer-head">
				<h2 className="footer-invite">Hiring a<br />developer?</h2>
				<Image className="footer-face" src="./images/profile.jpg" alt="Gabriel Miralles" width={800} height={800} />
			</div>
			<ul className="footer-rows">
				<li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
				<li><a href={LINKEDIN_URL}>LinkedIn</a></li>
				<li><a href={GITHUB_URL}>GitHub</a></li>
				<li>
					<a href="./CV_Gabriel_Miralles.pdf" download className={buttonClasses("inverse")}>
						Download my CV
					</a>
				</li>
			</ul>
			<div className="footer-legal">
				<p>Alicante, Spain</p>
				<p>© 2026 Gabriel Miralles</p>
			</div>
		</footer>
	);
}
