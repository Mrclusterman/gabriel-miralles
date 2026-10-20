import Image from "next/image";
import { projects } from "@/data/projects";

// Libro mayor de proyectos: al pasar o enfocar una fila aparece su imagen a la derecha.
export default function Work({ tech }: { tech: string | null }) {
	return (
		<section className="work" id="work" data-reveal>
			<h2 className="work-title">Selected work</h2>
			<ul className="ledger">
				{projects.map((project) => {
					const href = project.projectUrl ?? project.githubUrl;
					const dim = tech !== null && !project.technologies.includes(tech);
					const row = (
						<>
							<span className="ledger-name">{project.title}</span>
							<span className="ledger-kind">{project.kind}</span>
							<span className="ledger-year">{project.year}</span>
						</>
					);
					return (
						<li key={project.id} className={`ledger-row${dim ? " is-dim" : ""}`}>
							{href ? (
								<a href={href} className="ledger-line" target="_blank" rel="noopener noreferrer">
									{row}
								</a>
							) : (
								<div className="ledger-line" tabIndex={0}>
									{row}
								</div>
							)}
							<p className="ledger-desc">{project.description}</p>
							<div className="ledger-preview">
								<Image src={project.imageUrl} alt={`${project.title}: ${project.kind}`} width={960} height={600} />
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
