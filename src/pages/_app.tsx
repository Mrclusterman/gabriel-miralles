import type { AppProps } from "next/app";
import { Schibsted_Grotesk } from "next/font/google";
import "../styles/globals.css";

const grotesk = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`site ${grotesk.className}`}>
			<Component {...pageProps} />
		</div>
	);
}
