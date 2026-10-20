import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Marca que hay JavaScript: los estados ocultos de las animaciones solo se aplican con él */}
				<script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
				{/* La web tiene su propia paleta: que Dark Reader no la invierta (veía el fondo masilla en marrón) */}
				<meta name="darkreader-lock" />
				<meta name="color-scheme" content="light" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Gabriel Miralles – Full Stack Developer" />
				<meta
					property="og:description"
					content="Full Stack Developer from Alicante, Spain. TypeScript, Angular, Next.js, Node.js and Python (FastAPI)."
				/>
				<meta property="og:url" content="https://mrclusterman.github.io/gabriel-miralles/" />
				<meta property="og:image" content="https://mrclusterman.github.io/gabriel-miralles/images/profile.jpg" />
				<meta name="twitter:card" content="summary" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
