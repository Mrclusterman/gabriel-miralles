import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Web estática en GitHub Pages: sin servidor, así que sin optimizador de imágenes
	output: "export",
	images: { unoptimized: true },
	basePath: "/gabriel-miralles",
};

export default nextConfig;
