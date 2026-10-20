// Enlaces con aspecto de botón (un <button> dentro de un <a> no es accesible).
// Un solo estilo de botón en toda la página: relleno plano y esquinas rectas.
export function buttonClasses(variant: "solid" | "inverse" = "solid") {
	return `button button-${variant}`;
}
