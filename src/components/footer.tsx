import { Heart } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/github-icon";

export function Footer() {
	return (
		<footer className="bg-background bottom-0 z-50">
			<div className="container mx-auto px-3 md:px-6 py-3 max-w-4xl">
				<div className="flex items-center justify-center gap-4">
					<Link
						href="https://buymeacoffee.com/wowkeybindings"
						target="_blank"
						className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
					>
						<Heart className="size-5" fill="currentColor" />
					</Link>
					<Link
						href="https://github.com/merthanmerter/wow-keybinds"
						target="_blank"
						className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
					>
						<GithubIcon className="size-5" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
