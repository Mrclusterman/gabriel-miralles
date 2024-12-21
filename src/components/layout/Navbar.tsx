import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/utils/constants";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const isActiveLink = (path: string) => router.pathname === path;

	return (
		<nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					<Link href="/" className="font-bold text-xl">
						Gabriel Miralles
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`${
									isActiveLink(link.href)
										? "text-blue-600 dark:text-blue-400"
										: "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
								} transition-colors`}
							>
								{link.label}
							</Link>
						))}
						<ThemeToggle />
					</div>

					{/* Mobile Navigation Button */}
					<div className="md:hidden flex items-center">
						<ThemeToggle />
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="ml-4 text-gray-700 dark:text-gray-200"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{NAV_LINKS.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`${
										isActiveLink(link.href)
											? "text-blue-600 dark:text-blue-400"
											: "text-gray-700 dark:text-gray-200"
									} block px-3 py-2 rounded-md text-base font-medium`}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
