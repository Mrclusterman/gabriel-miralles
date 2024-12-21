interface BadgeProps {
	text: string;
	variant?: "default" | "success" | "warning" | "error";
	size?: "sm" | "md";
	className?: string;
}

export default function Badge({
	text,
	variant = "default",
	size = "sm",
	className = "",
}: BadgeProps) {
	const variants = {
		default:
			"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
		success:
			"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
		warning:
			"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
		error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
	};

	const sizes = {
		sm: "px-2.5 py-0.5 text-xs",
		md: "px-3 py-1 text-sm",
	};

	return (
		<span
			className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
		>
			{text}
		</span>
	);
}
