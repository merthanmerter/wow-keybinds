import { AdBanner } from "@/components/ad-banner";

export default function Page() {
	return (
		<div className="min-h-screen">
			<main className="container mx-auto px-3 md:px-6 py-3 max-w-4xl">
				<article className="prose prose-invert max-w-none">
					<h1 className="text-4xl font-bold mb-6">
						Ergonomic Keybinding Guide
					</h1>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							Why Ergonomics Matter
						</h2>
						<p className="text-muted-foreground mb-4">
							Proper ergonomic keybinding is crucial for long-term gaming health
							and performance in World of Warcraft. Well-designed keybinds
							reduce hand strain, improve reaction times, and help prevent
							repetitive strain injuries (RSI) during extended gaming sessions.
						</p>
					</section>

					{/* Top Ad */}
					<AdBanner
						dataAdSlot="6961410074"
						dataAdFormat="horizontal"
						dataFullWidthResponsive="true"
					/>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							The Space Bar and S Key: Your Most Valuable Keys
						</h2>
						<div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg mb-4">
							<p className="text-amber-200 font-semibold mb-2">
								Critical Insight: Don't Waste Prime Keys!
							</p>
							<p className="text-muted-foreground text-sm">
								The Space bar and S key are two of the most accessible keys on
								your keyboard, yet they're wasted by default on Jump and
								Backpedal—functions you rarely need in combat.
							</p>
						</div>

						<div className="space-y-4">
							<div>
								<h3 className="text-lg font-medium mb-2">
									Why Space Bar is Critically Important
								</h3>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
									<li>
										<strong>Largest key on your keyboard</strong> - Impossible
										to miss, even in high-pressure situations
									</li>
									<li>
										<strong>Accessible by your thumb</strong> - Your thumb is
										otherwise idle while gaming
									</li>
									<li>
										<strong>Zero hand movement required</strong> - Your thumb
										naturally rests near it
									</li>
									<li>
										<strong>Perfect for "God Button"</strong> - Bind your most
										critical, life-saving ability here (Iceblock, Divine Shield,
										Defensive CD)
									</li>
									<li>
										<strong>Default jump is wasteful</strong> - You rarely need
										to jump in combat; move it to Mouse 4 instead
									</li>
								</ul>
							</div>

							<div>
								<h3 className="text-lg font-medium mb-2">
									Why S Key is Essential for Abilities
								</h3>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
									<li>
										<strong>Part of WASD home position</strong> - Your ring
										finger naturally rests on it
									</li>
									<li>
										<strong>Instantly accessible</strong> - No reaching or
										stretching required
									</li>
									<li>
										<strong>Default backpedal is inefficient</strong> -
										Backpedaling is 40% slower than strafing and almost never
										optimal
									</li>
									<li>
										<strong>Better movement alternative</strong> - Use Mouse 5
										for back-strafe (strafe + turn) for better mobility
									</li>
									<li>
										<strong>Core rotation key</strong> - Perfect for frequently
										used abilities in your main rotation
									</li>
								</ul>
							</div>

							<div className="bg-secondary/50 p-4 rounded-lg">
								<h3 className="text-lg font-medium mb-2">The Math</h3>
								<p className="text-muted-foreground text-sm mb-3">
									In a typical 5-minute arena match or dungeon boss fight:
								</p>
								<ul className="space-y-2 text-sm">
									<li className="text-muted-foreground">
										<strong className="text-foreground">
											Times you use core rotation ability (on S):
										</strong>{" "}
										50-100+ times
									</li>
									<li className="text-muted-foreground">
										<strong className="text-foreground">
											Times you use defensive cooldown (on Space):
										</strong>{" "}
										2-5 times (but critical when needed)
									</li>
									<li className="text-muted-foreground">
										<strong className="text-foreground">
											Times you actually need to jump in combat:
										</strong>{" "}
										0-2 times
									</li>
									<li className="text-muted-foreground">
										<strong className="text-foreground">
											Times backpedaling is optimal:
										</strong>{" "}
										Almost never (strafing is always better)
									</li>
								</ul>
							</div>

							<div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
								<h3 className="text-lg font-medium mb-2 text-destructive">
									Common Objection: "But I need to jump!"
								</h3>
								<p className="text-muted-foreground text-sm mb-2">
									Moving jump to Mouse 4 (side button) is actually MORE
									convenient:
								</p>
								<ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
									<li>You can jump while casting or using abilities</li>
									<li>No need to stop pressing W to jump</li>
									<li>
										Your thumb on Space remains free for emergency abilities
									</li>
									<li>After 2-3 hours of practice, it becomes natural</li>
								</ul>
							</div>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Core Principles</h2>
						<ul className="list-disc list-inside space-y-2 text-muted-foreground">
							<li>
								<strong>Home Row Position</strong> - Keep your fingers on WASD
								and nearby keys
							</li>
							<li>
								<strong>Minimize Stretching</strong> - Frequently used abilities
								should be within easy reach
							</li>
							<li>
								<strong>Use SHIFT Modifier</strong> - SHIFT is recommended over
								ALT since your pinky finger is free while your thumb handles Z,
								X, C, V keys
							</li>
							<li>
								<strong>Mouse Click Casting</strong> - Assign mouse buttons (L,
								R, M) to click casting for efficiency
							</li>
							<li>
								<strong>Combine Offensive/Defensive</strong> - Use conditional
								macros to save key space
							</li>
							<li>
								<strong>Consistent Layout</strong> - Use similar binds across
								different characters
							</li>
							<li>
								<strong>Avoid Clicking</strong> - Bind everything you use
								regularly
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
						<h2 className="text-2xl font-semibold mb-4">
							Recommended Keybind Zones
						</h2>

						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium mb-2">
									1st Priority Zone (Core Rotation)
								</h3>
								<div className="bg-secondary/50 p-4 rounded-lg">
									<p className="text-sm mb-2">
										Most accessible keys for your main rotation:
									</p>
									<code className="text-sm">Q, E, R, F, S</code>
								</div>
								<p className="text-muted-foreground mt-2 text-sm">
									These are your absolute most important abilities. Can be
									extended with the ` (tilde) action bar swap macro.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2">
									2nd Priority Zone (Secondary Rotation)
								</h3>
								<div className="bg-secondary/50 p-4 rounded-lg">
									<p className="text-sm mb-2">Number keys for rotation:</p>
									<code className="text-sm">1, 2, 3, 4</code>
								</div>
								<p className="text-muted-foreground mt-2 text-sm">
									Secondary rotation abilities. Can also be extended with SHIFT
									for cooldowns/utility.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2">
									Special Purpose Keys
								</h3>
								<div className="bg-secondary/50 p-4 rounded-lg">
									<p className="text-sm mb-2">Key assignments:</p>
									<code className="text-sm">
										Space (God Button), Mouse Wheel (Interrupts), Z, X, C, V,
										Caps Lock
									</code>
								</div>
								<p className="text-muted-foreground mt-2 text-sm">
									Space for critical abilities, mouse wheel for
									interrupts/utility, Z/X/C/V/Caps for cooldowns and utility.
									Can be extended with SHIFT.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2">Mouse Buttons</h3>
								<div className="bg-secondary/50 p-4 rounded-lg">
									<p className="text-sm mb-2">Mouse button assignments:</p>
									<code className="text-sm">
										L, R, M (Click Casting), Mouse 4 (Jump), Mouse 5
										(Back-Strafe)
									</code>
								</div>
								<p className="text-muted-foreground mt-2 text-sm">
									Mouse L, R, M for click casting (middle recommended for
									targeting). Mouse 4/5 for movement. Can be extended with SHIFT
									modifier.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2">Action Bar Swap</h3>
								<div className="bg-secondary/50 p-4 rounded-lg">
									<p className="text-sm mb-2">
										Use the tilde key for bar swapping:
									</p>
									<code className="text-sm">` (Tilde)</code>
								</div>
								<p className="text-muted-foreground mt-2 text-sm">
									Extends 1st priority keybinds (Q, E, R, F, S) using the swap
									bar macro, creating a familiar "weapon swap" feel similar to
									modern MMOs.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Advanced Techniques</h2>

						<div className="space-y-6">
							<div className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-lg">
								<h3 className="text-xl font-medium mb-3 text-blue-200">
									The Action Bar Swap Technique: A Game Changer
								</h3>

								<p className="text-muted-foreground mb-4">
									This is one of the most underutilized techniques in WoW
									keybinding, yet it completely transforms how you access
									abilities. The action bar swap macro lets you instantly toggle
									between two different action bars using a single key,
									effectively{" "}
									<strong className="text-foreground">
										doubling your available keybinds
									</strong>{" "}
									without using awkward modifiers.
								</p>

								<div className="mb-4">
									<h4 className="text-lg font-medium mb-2">The Macro:</h4>
									<pre className="bg-accent p-3 rounded border border-border text-xs font-mono">
										/changeactionbar [actionbar:1]2;[actionbar:2]1
									</pre>
								</div>

								<div className="mb-4">
									<h4 className="text-lg font-medium mb-2">How It Works:</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
										<li>
											Bind this macro to the ` (tilde) key, located just above
											Tab
										</li>
										<li>
											Set up your main rotation on Action Bar 1 using Q, E, R,
											F, S
										</li>
										<li>
											Set up alternative abilities on Action Bar 2 using the
											SAME keybinds (Q, E, R, F, S)
										</li>
										<li>
											Press ` to instantly swap between the two bars - your 1st
											priority keys now access completely different abilities
										</li>
									</ul>
								</div>

								<div className="mb-4">
									<h4 className="text-lg font-medium mb-2">
										Why This Feels Amazing:
									</h4>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
										<li>
											<strong className="text-foreground">
												Familiar muscle memory
											</strong>{" "}
											- Similar to weapon swapping in modern MMOs (Guild Wars 2,
											ESO, New World)
										</li>
										<li>
											<strong className="text-foreground">
												No awkward finger stretching
											</strong>{" "}
											- Keep your hands in the optimal WASD position
										</li>
										<li>
											<strong className="text-foreground">
												Instant feedback
											</strong>{" "}
											- Your action bars visually change, so you always know
											which "stance" you're in
										</li>
										<li>
											<strong className="text-foreground">
												Context-based gameplay
											</strong>{" "}
											- Bar 1 for single-target, Bar 2 for AoE. Or Bar 1 for
											PvE, Bar 2 for PvP
										</li>
										<li>
											<strong className="text-foreground">
												One key to swap everything
											</strong>{" "}
											- Instead of pressing Shift/Ctrl/Alt for each individual
											ability
										</li>
									</ul>
								</div>

								<div className="mt-4 bg-amber-500/10 border border-amber-500/30 p-3 rounded">
									<p className="text-sm text-amber-200">
										<strong>Pro Tip:</strong> The tilde key is perfectly
										positioned - your pinky can reach it without moving your
										hand off WASD. After a few hours of practice, swapping bars
										becomes as natural as shifting gears in a car.
									</p>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-medium mb-2">
									Combining Offensive and Defensive Abilities
								</h3>
								<p className="text-muted-foreground text-sm mb-2">
									Save key space by combining abilities based on target type.
									This macro casts different spells depending on whether your
									target is friendly or hostile:
								</p>
								<pre className="bg-accent p-3 rounded border border-border text-xs font-mono">
									{`#showtooltip
/cast [harm] Mind Blast
/cast Flash Heal`}
								</pre>
								<p className="text-muted-foreground text-sm mt-2">
									With this approach, one keybind intelligently casts an
									offensive spell on enemies or a healing spell on allies,
									reducing the total number of keys you need.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Hand Health Tips</h2>
						<ul className="list-disc list-inside space-y-2 text-muted-foreground">
							<li>Take regular breaks every 45-60 minutes</li>
							<li>Stretch your hands, wrists, and fingers between sessions</li>
							<li>Maintain proper posture while gaming</li>
							<li>Keep your keyboard and mouse at comfortable heights</li>
							<li>Don't grip your mouse too tightly</li>
							<li>
								If you experience pain, adjust your setup or consult a
								professional
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
