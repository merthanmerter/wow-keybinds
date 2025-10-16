import Image from "next/image";
import { AdBanner } from "@/components/ad-banner";
import { KeyLayouts } from "@/components/key-layouts";
import { KeybindsTable } from "@/components/keybinds-table";
import { Kbd } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<div className="min-h-screen">
			<main className="container mx-auto p-6 max-w-4xl">
				{/* Top Ad */}
				<AdBanner
					dataAdSlot="6961410074"
					dataAdFormat="horizontal"
					dataFullWidthResponsive="true"
				/>

				<div className="text-center mb-8">
					<h2 className="text-lg text-gray-400">World of Warcraft</h2>
					<h1 className="text-4xl font-bold text-yellow-400 mb-2 uppercase">
						Dog's Key Bindings
					</h1>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<KeyLayouts />
				</div>

				{/* Notes Section */}
				<div className="mt-6 bg-card p-6 rounded-lg">
					<h3 className="text-xl font-bold text-yellow-400 mb-4">Tips</h3>
					<div className="grid md:grid-cols-3 gap-6 items-start">
						<ul className="space-y-3 text-sm md:col-span-2 col-span-1">
							<li>
								Mouse L, Mouse R, Mouse M assigned to click casting. Middle
								mouse recommended for target unit. These can be extended with
								shift modifier.
							</li>
							<Separator className="my-2" />
							<li>
								The tilde <Kbd>`</Kbd> key can be used to further extend the
								first-priority keybinds with the swap bar macro. This creates a
								familiar “weapon swap” feel similar to modern MMOs:
								<pre className="mt-2 bg-accent p-3 rounded border border-border text-xs font-mono">
									/changeactionbar [actionbar:1]2;[actionbar:2]1
								</pre>
							</li>
							<Separator className="my-2" />
							<li>
								Combining defensive and offensive abilities in one keybind
								improves efficiency and saves key space:
								<pre className="mt-2 bg-accent p-3 rounded border border-border text-xs font-mono">
									{`#showtooltip
/cast [harm] Mind Blast
/cast Flash Heal`}
								</pre>
							</li>
							<Separator className="my-2" />
							<li>
								The ALT key can be used as a modifier instead of SHIFT, but
								SHIFT is recommended since the thumb is typically reserved for
								the Z, X, C, and V keys, while the pinky finger is free to use.
							</li>
						</ul>

						<Image
							priority={true}
							unoptimized={true}
							width={250}
							height={173}
							src="/example.png"
							alt="Example of a keybind setup"
							className="w-auto h-auto object-contain rounded-md shadow-md overflow-hidden"
						/>
					</div>
				</div>

				{/* Content Ad */}
				<AdBanner
					dataAdSlot="8370888185"
					dataAdFormat="horizontal"
					dataFullWidthResponsive="true"
				/>

				{/* Keybinds Table */}
				<div className="mt-6">
					<KeybindsTable />
				</div>

				{/* Bottom Ad */}
				<AdBanner
					dataAdSlot="1777559677"
					dataAdFormat="horizontal"
					dataFullWidthResponsive="true"
				/>
			</main>
		</div>
	);
}
