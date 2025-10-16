import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface DonateButtonProps {
	href?: string;
	className?: string;
}

export function DonateButton({
	href = "https://buymeacoffee.com/wowkeybindings",
	className = "",
}: DonateButtonProps) {
	return (
		<Button
			className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-colors duration-500 ${className}`}
			asChild
		>
			<Link href={href} target="_blank" rel="noopener noreferrer">
				<Heart className="w-5 h-5" fill="currentColor" />
				<span>Support This Project</span>
			</Link>
		</Button>
	);
}
