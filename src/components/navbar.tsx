"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DonateButton } from "./donate-button";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ href: "/macro", label: "In-depth Macro Guide" },
		{ href: "/ergonomics", label: "Ergonomics" },
	];

	return (
		<nav className="bg-background sticky top-0 z-50">
			<div className="container mx-auto px-3 md:px-6 py-3 max-w-4xl">
				<div className="flex items-center justify-between">
					{/* Logo/Title */}
					<Link
						href="/"
						className="flex flex-col hover:opacity-80 transition-opacity"
					>
						<span className="text-xs text-gray-400 tracking-wide">
							World of Warcraft
						</span>
						<span className="text-xl md:text-2xl font-bold text-yellow-400 uppercase tracking-wide">
							Dog's Key Bindings
						</span>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-6">
						{menuItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
							>
								{item.label}
							</Link>
						))}
						<DonateButton className="!px-3 !py-1.5 !text-sm" />
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden text-foreground hover:text-yellow-400 transition-colors"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden pt-4 pb-2 flex flex-col gap-3 border-t border-border/50 mt-3">
						{menuItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setIsMenuOpen(false)}
								className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors py-2"
							>
								{item.label}
							</Link>
						))}
						<div className="pt-2">
							<DonateButton className="!w-full !text-sm" />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
