import { test } from "node:test";
import assert from "node:assert/strict";
import { toProject } from "./github.ts";

const repo = {
	name: "demo",
	html_url: "https://github.com/Mrclusterman/demo",
	homepage: "",
	created_at: "2024-05-01T00:00:00Z",
	pushed_at: "2026-10-20T00:00:00Z",
};
const manifest = { kind: "Tool", description: "A demo.", technologies: ["Lua"], imageAlt: "the screen" };

test("builds a project from the repo and its manifest", () => {
	const project = toProject(repo, manifest, "img.jpg");
	assert.equal(project.title, "demo");
	assert.equal(project.year, "2024–2026");
	assert.equal(project.githubUrl, repo.html_url);
	assert.ok(!("projectUrl" in project), "no undefined keys for getStaticProps");
});

test("one year when created and last pushed the same year, manifest overrides", () => {
	const same = { ...repo, created_at: "2026-01-01T00:00:00Z", homepage: "https://example.com" };
	assert.equal(toProject(same, manifest, "img.jpg").year, "2026");
	assert.equal(toProject(same, manifest, "img.jpg").projectUrl, "https://example.com");
	assert.equal(toProject(repo, { ...manifest, year: "2023–2026", title: "Demo" }, "img.jpg").year, "2023–2026");
});

test("rejects an incomplete manifest", () => {
	assert.throws(() => toProject(repo, { ...manifest, kind: "" }, "img.jpg"), /kind/);
	assert.throws(() => toProject(repo, { ...manifest, technologies: "Lua" }, "img.jpg"), /technologies/);
});
