import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	// Prevent hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

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
