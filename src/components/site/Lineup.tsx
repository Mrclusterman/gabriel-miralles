import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { Fragment } from "react";
import { Entry } from "@/types";

// Tecnologías de toda la trayectoria y los proyectos, para el filtro
const technologies = [
	...new Set([...experiences, ...education, ...projects].flatMap((item) => item.technologies)),
].sort((a, b) => a.localeCompare(b));

function Rows({ entries, tech }: { entries: Entry[]; tech: string | null }) {
	return (
		<tbody>
			{entries.map((entry) => {
				const hit = tech !== null && entry.technologies.includes(tech);
				const dim = tech !== null && !hit;
				const state = dim ? "is-dim" : hit ? "is-hit" : "";
				return (
					<Fragment key={entry.id}>
						<tr className={state}>
							<th scope="row">{entry.title}</th>
							<td>{entry.place}</td>
							<td className="lineup-stack">{entry.technologies.join(", ")}</td>
							<td className="lineup-period">{entry.period}</td>
						</tr>
						<tr className={`lineup-summary ${state}`}>
							<td></td>
							<td colSpan={3}>{entry.summary}</td>
						</tr>
					</Fragment>
				);
			})}
		</tbody>
	);
}

// La trayectoria como el calendario de un plan de entrenamiento: puesto, dónde, con qué y cuándo.
export default function Lineup({
	tech,
	onTech,
}: {
	tech: string | null;
	onTech: (tech: string | null) => void;
}) {
	return (
		<section className="lineup" id="experience" data-reveal>
			<div className="lineup-filter">
				<p id="filter-label">Show where I used</p>
				<div className="chips" role="group" aria-labelledby="filter-label">
					{technologies.map((name) => (
						<button
							key={name}
							type="button"
							className="chip"
							aria-pressed={tech === name}
							onClick={() => onTech(tech === name ? null : name)}
						>
							{name}
						</button>
					))}
				</div>
			</div>

			<h2 className="lineup-part">Experience</h2>
			<table className="lineup-table">
				<caption className="visually-hidden">Professional experience</caption>
				<Rows entries={experiences} tech={tech} />
			</table>

			<h2 className="lineup-part">Education</h2>
			<table className="lineup-table">
				<caption className="visually-hidden">Education</caption>
				<Rows entries={education} tech={tech} />
			</table>
		</section>
	);
}
