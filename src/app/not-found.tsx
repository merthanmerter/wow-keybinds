import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center p-4 md:py-32">
			<div className="container mx-auto px-3 md:px-6 py-3 max-w-4xl text-center">
				<div className="space-y-6">
					<div className="space-y-2">
						<h1 className="text-8xl font-bold text-yellow-400 tracking-wider">
							404
						</h1>
						<h2 className="text-2xl font-semibold text-gray-400 tracking-wide">
							Page Not Found
						</h2>
					</div>

					<div className="bg-card p-8 rounded-lg border border-border/50 space-y-4">
						<p className="text-muted-foreground text-lg">
							Looks like you tried to keybind something that doesn't exist.
						</p>
						<p className="text-sm text-muted-foreground">
							This page might have been removed, had its keybind changed, or got
							stuck in a macro loop.
						</p>
					</div>

					<Button
						asChild
						className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
					>
						<Link href="/">Return to Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
