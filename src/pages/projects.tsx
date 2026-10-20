import Head from "next/head";

// La web es ahora una sola página: esta ruta antigua lleva a su sección
export default function Redirect() {
	return (
		<>
			<Head>
				<meta httpEquiv="refresh" content="0; url=./#work" />
				<meta name="robots" content="noindex" />
			</Head>
			<p className="redirect">
				This page has moved: <a href="./#work">go to it</a>.
			</p>
		</>
	);
}
