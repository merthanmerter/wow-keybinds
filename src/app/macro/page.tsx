import { AdBanner } from "@/components/ad-banner";

export default function Page() {
	return (
		<div className="min-h-screen">
			<main className="container mx-auto px-3 md:px-6 py-3 max-w-4xl">
				{/* Top Ad */}
				{/* <AdBanner
					dataAdSlot="6961410074"
					dataAdFormat="horizontal"
					dataFullWidthResponsive="true"
				/> */}

				<article className="prose prose-invert max-w-none">
					<h1 className="text-4xl font-bold mb-6">In-depth Macro Guide</h1>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">What are Macros?</h2>
						<p className="text-muted-foreground mb-4">
							Macros in World of Warcraft are custom commands that allow you to
							combine multiple actions into a single button press. They can
							dramatically improve your gameplay by reducing the number of
							keybinds needed and automating complex sequences.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Basic Macro Syntax</h2>
						<div className="bg-secondary/50 p-4 rounded-lg mb-4">
							<code className="text-sm">
								#showtooltip
								<br />
								/cast Spell Name
								<br />
								/use Item Name
							</code>
						</div>
						<p className="text-muted-foreground">
							The #showtooltip command displays the tooltip of the ability being
							cast. This helps you track cooldowns and shows the spell icon
							dynamically.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							Common Macro Commands
						</h2>
						<ul className="list-disc list-inside space-y-2 text-muted-foreground">
							<li>
								<strong>/cast</strong> - Casts a spell or ability
							</li>
							<li>
								<strong>/use</strong> - Uses an item or activates an ability
							</li>
							<li>
								<strong>/target</strong> - Targets a specific unit
							</li>
							<li>
								<strong>/focus</strong> - Sets your focus target
							</li>
							<li>
								<strong>/stopcasting</strong> - Cancels current spell cast
							</li>
							<li>
								<strong>/cancelaura</strong> - Removes a buff from yourself
							</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							Conditional Modifiers
						</h2>
						<p className="text-muted-foreground mb-4">
							Conditional modifiers allow you to perform different actions based
							on conditions:
						</p>
						<div className="bg-secondary/50 p-4 rounded-lg mb-4">
							<code className="text-sm">
								#showtooltip
								<br />
								/cast [mod:shift] Spell One; [mod:ctrl] Spell Two; Spell Three
							</code>
						</div>
						<ul className="list-disc list-inside space-y-2 text-muted-foreground">
							<li>
								<strong>[mod:shift]</strong> - When holding Shift
							</li>
							<li>
								<strong>[mod:ctrl]</strong> - When holding Ctrl
							</li>
							<li>
								<strong>[mod:alt]</strong> - When holding Alt
							</li>
							<li>
								<strong>[harm]</strong> - Target is hostile
							</li>
							<li>
								<strong>[help]</strong> - Target is friendly
							</li>
							<li>
								<strong>[combat]</strong> - You are in combat
							</li>
						</ul>
					</section>

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

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Example Macros</h2>

						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium mb-2">
									Mouseover Healing Macro
								</h3>
								<div className="bg-secondary/50 p-4 rounded-lg">
									<code className="text-sm">
										#showtooltip
										<br />
										/cast [@mouseover,help,nodead][@target,help,nodead][@player]
										Heal
									</code>
								</div>
								<p className="text-muted-foreground mt-2 text-sm">
									Casts heal on mouseover target, then your target, then
									yourself.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2">Modifier Macro</h3>
								<div className="bg-secondary/50 p-4 rounded-lg">
									<code className="text-sm">
										#showtooltip
										<br />
										/cast [mod:shift] Offensive Spell; [mod:ctrl] Defensive
										Spell; Regular Spell
									</code>
								</div>
								<p className="text-muted-foreground mt-2 text-sm">
									One button for three different spells based on modifier keys.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2">
									Focus Interrupt Macro
								</h3>
								<div className="bg-secondary/50 p-4 rounded-lg">
									<code className="text-sm">
										#showtooltip
										<br />
										/cast [@focus,harm,nodead][] Kick
									</code>
								</div>
								<p className="text-muted-foreground mt-2 text-sm">
									Interrupts your focus target, or current target if no focus is
									set.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							Tips for Macro Creation
						</h2>
						<ul className="list-disc list-inside space-y-2 text-muted-foreground">
							<li>Keep macros simple and focused on specific tasks</li>
							<li>Use #showtooltip to display relevant ability information</li>
							<li>Test macros thoroughly before using them in raids or PvP</li>
							<li>Remember the 255 character limit for macros</li>
							<li>Use semicolons (;) to separate conditional statements</li>
							<li>
								Combine frequently used ability sequences to save keybinds
							</li>
						</ul>
					</section>
				</article>

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
