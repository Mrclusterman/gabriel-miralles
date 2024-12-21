import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
	type?: "button" | "submit" | "reset";
}

export default function Button({
	children,
	variant = "primary",
	size = "md",
	onClick,
	disabled = false,
	className = "",
	type = "button",
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

	const variants = {
		primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
		secondary:
			"bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white",
		outline:
			"border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 dark:hover:bg-gray-800",
	};

	const sizes = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-4 py-2",
		lg: "px-6 py-3 text-lg",
	};

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
		>
			{children}
		</button>
	);
}
