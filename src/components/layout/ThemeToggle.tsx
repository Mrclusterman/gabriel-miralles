import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useSyncExternalStore } from "react";

export default function ThemeToggle() {
	// false al prerenderizar y true en el navegador: evita el desajuste de hidratación sin setState en un efecto
	const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
	const { theme, setTheme, systemTheme } = useTheme();

	// Get the current theme, accounting for system theme
	const currentTheme = theme === "system" ? systemTheme : theme;

	if (!mounted) {
		return (
			<button
				className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
				aria-label="Toggle theme"
			>
				<Moon size={20} />
			</button>
		);
	}

	return (
		<button
			onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
			className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
			aria-label="Toggle theme"
		>
			{currentTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
}
