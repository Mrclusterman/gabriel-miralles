import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
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
			<body className="bg-white dark:bg-gray-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
