import type { Project } from "@/types";

const USER = "Mrclusterman";
// Organizaciones con proyectos suyos (Brivel vive en brivelapp)
const ORGS = ["brivelapp"];
// Siempre arriba en "Selected work", en este orden; el resto, del más reciente al más antiguo
const PINNED = ["brivelapp/brivel"];

// Lo que GitHub devuelve de cada repo y lo que el repo declara en .github/portfolio.json
type Repo = { name: string; full_name: string; html_url: string; homepage: string | null; created_at: string; pushed_at: string };
type Manifest = {
	title?: string;
	kind: string;
	description: string;
	technologies: string[];
	imageAlt: string;
	year?: string;
};

// Sin claves undefined: getStaticProps no puede serializarlas
export function toProject(repo: Repo, manifest: Manifest, imageUrl: string): Project {
	for (const key of ["kind", "description", "imageAlt"] as const) {
		if (typeof manifest[key] !== "string" || !manifest[key]) throw new Error(`${repo.name}: portfolio.json needs "${key}"`);
	}
	if (!Array.isArray(manifest.technologies) || !manifest.technologies.every((t) => typeof t === "string")) {
		throw new Error(`${repo.name}: portfolio.json needs "technologies" as a list of names`);
	}
	const from = repo.created_at.slice(0, 4);
	const to = repo.pushed_at.slice(0, 4);
	return {
		id: repo.name,
		title: manifest.title ?? repo.name,
		kind: manifest.kind,
		year: manifest.year ?? (from === to ? from : `${from}–${to}`),
		description: manifest.description,
		technologies: manifest.technologies,
		imageUrl,
		imageAlt: manifest.imageAlt,
		...(repo.homepage ? { projectUrl: repo.homepage } : {}),
		githubUrl: repo.html_url,
	};
}

// Cada repo público con .github/portfolio.json (y su captura .github/portfolio.jpg) entra solo en "Selected work",
// del más reciente al más antiguo. Un fallo rompe el build a propósito: así sigue publicada la versión anterior.
export async function githubProjects(): Promise<Project[]> {
	const token = process.env.GITHUB_TOKEN;
	const auth: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};
	const lists = await Promise.all(
		[`users/${USER}/repos?type=owner`, ...ORGS.map((org) => `orgs/${org}/repos?type=public`)].map(async (path) => {
			const res = await fetch(`https://api.github.com/${path}&sort=pushed&per_page=100`, { headers: auth });
			if (!res.ok) throw new Error(`GitHub API: ${res.status} ${res.statusText}`);
			return (await res.json()) as (Repo & { fork: boolean; archived: boolean; default_branch: string; private: boolean })[];
		})
	);
	const rank = (name: string) => (PINNED.includes(name) ? PINNED.indexOf(name) : PINNED.length);
	const repos = lists
		.flat()
		.sort((a, b) => rank(a.full_name) - rank(b.full_name) || b.pushed_at.localeCompare(a.pushed_at));

	const found = await Promise.all(
		repos
			.filter((repo) => !repo.fork && !repo.archived && !repo.private)
			.map(async (repo) => {
				// La API y no raw.githubusercontent.com: su caché de minutos no vería un manifiesto recién subido
				const manifest = await fetch(`https://api.github.com/repos/${repo.full_name}/contents/.github/portfolio.json`, {
					headers: { ...auth, Accept: "application/vnd.github.raw+json" },
				});
				if (manifest.status === 404) return null;
				if (!manifest.ok) throw new Error(`${repo.name}: portfolio.json ${manifest.status}`);
				const image = `https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/.github/portfolio.jpg`;
				return toProject(repo, await manifest.json(), image);
			})
	);
	return found.filter((project) => project !== null);
}
