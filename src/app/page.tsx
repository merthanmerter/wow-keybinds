import Image from "next/image";
import { AdBanner } from "@/components/ad-banner";
import { KeyLayouts } from "@/components/key-layouts";
import { KeybindsTable } from "@/components/keybinds-table";
import { Kbd } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<div className="min-h-screen">
			<main className="container mx-auto px-3 md:px-6 py-3 max-w-4xl">
				{/* Top Ad */}
				{/* <AdBanner
					dataAdSlot="6961410074"
					dataAdFormat="horizontal"
					dataFullWidthResponsive="true"
				/> */}

				{/* <div className="text-center mb-8">
					<h2 className="text-lg text-gray-400 text-center tracking-wide">
						World of Warcraft
					</h2>
					<h1 className="text-4xl font-bold text-yellow-400 mb-2 uppercase text-center tracking-wide">
						Dog's Key Bindings
					</h1>
					<div className="mt-4 flex justify-center">
						<DonateButton />
					</div>
				</div> */}

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
				{/* <Link href="https://verkron.com" target="_blank">
					<Image
						src="/vk_banner.png"
						alt="Verkron"
						width={848}
						height={90}
						className="w-full h-[90px] mx-auto my-6 rounded-md border border-border/50 hidden sm:block"
						priority={true}
						unoptimized={true}
					/>
					<Image
						src="/vk_banner_mobile.png"
						alt="Verkron"
						width={848}
						height={90}
						className="w-full h-[90px] mx-auto my-6 rounded-md border border-border/50 block sm:hidden"
						priority={true}
						unoptimized={true}
					/>
				</Link> */}

				<div className="mt-6 bg-card p-6 rounded-lg border-2 border-yellow-400/20">
					<div className="grid md:grid-cols-3 gap-6 items-start">
						<ul className="space-y-3 text-sm md:col-span-2 col-span-1">
							<li>
								<span className="text-yellow-400 font-bold">
									12 Prime Keys:
								</span>{" "}
								Q, E, R, F, S, 1-4, Space, and Mouse Wheel Up/Down - instantly
								accessible without moving your hand position. Your core rotation
								lives here.
							</li>
							<Separator className="my-2" />
							<li>
								<span className="text-yellow-400 font-bold">
									+12 via Tilde Swap:
								</span>{" "}
								One key to double your arsenal.{" "}
								<span className="text-green-400">12 → 24 accessible binds</span>{" "}
								with zero hand movement required.
							</li>
							<Separator className="my-2" />
							<li>
								<span className="text-yellow-400 font-bold">
									+2 Shift+Mousewheel:
								</span>{" "}
								Zero finger stretching required - your pinky holds Shift while
								your hand stays relaxed on the mouse. Pure ergonomic efficiency.
							</li>
							<Separator className="my-2" />
							<li>
								<span className="text-yellow-400 font-bold">
									+4 Thumb Keys:
								</span>{" "}
								Z, X, C, V positioned perfectly for your thumb - mount,
								cooldowns, and utilities.
							</li>
							<Separator className="my-2" />
							<li>
								<span className="text-yellow-400 font-bold">
									+5 Shift Modifiers:
								</span>{" "}
								Comfortable secondary layer (Shift+Q, E, Space, 1, 2) for
								situational CDs that don't need instant response.
							</li>
							<Separator className="my-2" />
							<li>
								<span className="text-yellow-400 font-bold">+1 Bonus Key:</span>{" "}
								Caps Lock - ergonomically positioned for additional utility or
								cooldowns.
							</li>
							<Separator className="my-2" />
							<li>
								<span className="text-yellow-400 font-bold">
									~8 Harm/Friendly Macros:
								</span>{" "}
								<span className="text-muted-foreground text-xs">
									(estimated)
								</span>{" "}
								Intelligent targeting multiplies efficiency. Average 4 keys × 2
								spells × Tilde layer =
								<span className="text-green-400 font-bold">
									{" "}
									~8 additional effective binds
								</span>
								.
							</li>
						</ul>
						<div className="bg-gradient-to-br from-yellow-400/10 to-green-400/10 p-6 rounded-lg border border-yellow-400/30">
							<div className="text-center">
								<div className="text-5xl font-black text-yellow-400 mb-2">
									44
								</div>
								<div className="text-xs text-muted-foreground mb-4">
									TOTAL ACCESSIBLE ABILITIES
								</div>
								<div className="space-y-2 text-xs text-left">
									<div className="flex justify-between">
										<span className="text-muted-foreground">Prime keys:</span>
										<span className="text-white font-mono">12</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Tilde layer:</span>
										<span className="text-white font-mono">+12</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Shift+Mousewheel:
										</span>
										<span className="text-white font-mono">+2</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Thumb keys:</span>
										<span className="text-white font-mono">+4</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Shift modifiers:
										</span>
										<span className="text-white font-mono">+5</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Caps Lock:</span>
										<span className="text-white font-mono">+1</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Smart macros:</span>
										<span className="text-white font-mono">~8</span>
									</div>
									<Separator className="my-2" />
									<div className="flex justify-between text-base">
										<span className="text-yellow-400 font-bold">Total:</span>
										<span className="text-green-400 font-bold font-mono">
											44
										</span>
									</div>
								</div>
								<div className="mt-4 pt-4 border-t border-yellow-400/20">
									<p className="text-xs text-muted-foreground italic">
										All without stretching your fingers beyond comfortable
										reach.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

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
