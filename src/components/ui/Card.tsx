import { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	hover?: boolean;
}

export default function Card({
	children,
	className = "",
	onClick,
	hover = false,
}: CardProps) {
	const baseStyles = "bg-white dark:bg-gray-800 rounded-lg shadow-lg";
	const hoverStyles = hover
		? "transition-transform hover:scale-105 cursor-pointer"
		: "";

	return (
		<div
			className={`${baseStyles} ${hoverStyles} ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
}
