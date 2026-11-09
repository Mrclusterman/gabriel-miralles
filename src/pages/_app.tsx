import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "../styles/globals.css";

// En el repo y no de Google: si Google falla, el build diario falla con él (pasó el 2026-11-08)
const grotesk = localFont({ src: "../fonts/SchibstedGrotesk-latin.woff2", weight: "400 900" });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`site ${grotesk.className}`}>
			<Component {...pageProps} />
		</div>
	);
}
