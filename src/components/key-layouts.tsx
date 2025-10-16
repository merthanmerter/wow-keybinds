"use client";

import { useShiftPressed } from "@/hooks/is-shift-pressed";
import { Key } from "./key-item";
import { KeyTooltip } from "./key-tooltip";
import { Kbd } from "./ui/kbd";

export const KeyLayouts: React.FC = () => {
	const { isShiftPressed, setClickShift } = useShiftPressed();

	return (
		<>
			<div className="inline-block">
				{/* Main Keyboard */}
				<div className="bg-card p-6 rounded-lg inline-block overflow-visible w-full h-full">
					{/* Row 1 */}
					<div className="flex gap-1.5 mb-1.5">
						<div className="w-16">
							<KeyTooltip
								keyLabel="`"
								imageUrl={"/wow-actionbar-swap.gif"}
								unoptimized={true}
							>
								<Key
									keyLabel="`"
									description="Swap Actions"
									className="bg-rose-600 hover:bg-rose-500"
									isShiftPressed={isShiftPressed}
								/>
							</KeyTooltip>
						</div>
						<div className="w-16">
							<Key
								keyLabel="1"
								description="2nd Priority"
								className="bg-blue-600 hover:bg-blue-500"
								isShiftPressed={isShiftPressed}
								hasModifier={true}
								modifierDescription="CD / Utility"
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="2"
								description="2nd Priority"
								className="bg-blue-600 hover:bg-blue-500"
								isShiftPressed={isShiftPressed}
								hasModifier={true}
								modifierDescription="CD / Utility"
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="3"
								description="2nd Priority"
								className="bg-blue-600 hover:bg-blue-500"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="4"
								description="2nd Priority"
								className="bg-blue-600 hover:bg-blue-500"
								isShiftPressed={isShiftPressed}
							/>
						</div>
					</div>

					{/* Row 2 */}
					<div className="flex gap-1.5 mb-1.5">
						<div className="w-16">
							<Key
								keyLabel="TAB"
								description="Target"
								className="bg-slate-700 hover:bg-slate-600"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="Q"
								description="1st Priority"
								className="bg-amber-600 hover:bg-amber-500"
								isShiftPressed={isShiftPressed}
								hasModifier={true}
								modifierDescription="CD / Utility"
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="W"
								description="Move Forward"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="E"
								description="1st Priority"
								className="bg-amber-600 hover:bg-amber-500"
								isShiftPressed={isShiftPressed}
								hasModifier={true}
								modifierDescription="CD / Utility"
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="R"
								description="1st Priority"
								className="bg-amber-600 hover:bg-amber-500"
								isShiftPressed={isShiftPressed}
							/>
						</div>
					</div>

					{/* Row 3 */}
					<div className="flex gap-1.5 mb-1.5">
						<div className="w-20">
							<Key
								keyLabel="CAPS"
								description="CD / Utility"
								className="bg-slate-700 hover:bg-slate-600"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="A"
								description="Strafe Left"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="S"
								description="1st Priority"
								className="bg-amber-600 hover:bg-amber-500"
								isShiftPressed={isShiftPressed}
								modifierDescription="CD / Utility"
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="D"
								description="Strafe Right"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="F"
								description="1st Priority"
								className="bg-amber-600 hover:bg-amber-500"
								isShiftPressed={isShiftPressed}
							/>
						</div>
					</div>

					{/* Row 4 */}
					<div className="flex gap-1.5 mb-1.5">
						<button
							type="button"
							className="w-24 ring-0 outline-none"
							onMouseDown={() => setClickShift(true)}
							onMouseUp={() => setClickShift(false)}
							onMouseLeave={() => setClickShift(false)}
						>
							<Key
								keyLabel="SHIFT"
								description="Modifier"
								className="bg-slate-700 hover:bg-slate-600"
								isShiftPressed={false}
							/>
						</button>
						<div className="w-16">
							<Key
								keyLabel="Z"
								description="Mount"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="X"
								description="CD / Utility"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="C"
								description="CD / Utility"
								isShiftPressed={isShiftPressed}
							/>
						</div>
						<div className="w-16">
							<Key
								keyLabel="V"
								description="CD / Utility"
								isShiftPressed={isShiftPressed}
							/>
						</div>
					</div>

					{/* Spacebar */}
					<div className="flex mt-1.5">
						<div className="flex-1">
							<Key
								keyLabel="SPACE"
								description="God Button"
								isShiftPressed={isShiftPressed}
								hasModifier={true}
							/>
						</div>
					</div>

					<div className="text-sm text-gray-400 mt-2 text-center">
						<p>
							Press or click <Kbd>Shift</Kbd> to activate modifier
						</p>
					</div>
				</div>
			</div>

			<div className="inline-block">
				<div className="bg-card p-6 rounded-lg inline-block overflow-visible w-full h-full">
					<div className="relative w-full h-full flex items-center justify-center">
						{/* Mouse border */}
						<div className="relative border-4 border-border p-3 rounded-full rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[150px] rounded-br-[150px] bg-muted/30">
							<div className="w-16 mx-auto mb-1.5">
								<Key
									keyLabel="MWU"
									description="Interrupt / Purge"
									isShiftPressed={isShiftPressed}
									className="bg-transparent border-amber-600 border-dashed hover:bg-amber-600"
									hasModifier={true}
									modifierDescription="Utility / Movement"
								/>
							</div>

							<div className="flex gap-1.5 mb-1.5">
								<div className="w-16">
									<KeyTooltip keyLabel="L" imageUrl={"/click-cast.png"}>
										<Key
											keyLabel="L"
											description="Click Cast"
											isShiftPressed={isShiftPressed}
											hasModifier={true}
											modifierDescription="Target Unit"
										/>
									</KeyTooltip>
								</div>
								<div className="w-16">
									<KeyTooltip keyLabel="M" imageUrl={"/click-cast.png"}>
										<Key
											keyLabel="M"
											description="Click Cast"
											isShiftPressed={isShiftPressed}
											hasModifier={true}
										/>
									</KeyTooltip>
								</div>
								<div className="w-16">
									<KeyTooltip keyLabel="R" imageUrl={"/click-cast.png"}>
										<Key
											keyLabel="R"
											description="Click Cast"
											isShiftPressed={isShiftPressed}
											hasModifier={true}
											modifierDescription="Context Menu"
										/>
									</KeyTooltip>
								</div>
							</div>

							{/* Mouse Wheel Down - dashed orange border */}
							<div className="w-16 mx-auto">
								<Key
									keyLabel="MWD"
									description="Interrupt"
									isShiftPressed={isShiftPressed}
									className="bg-transparent border-amber-600 border-dashed hover:bg-amber-600"
									hasModifier={true}
									modifierDescription="Utility / Movement"
								/>
							</div>

							{/* Empty space at bottom to resemble mouse body */}
							<div className="h-24"></div>

							{/* Side buttons - M4 above M5 on left side */}
							<div className="absolute left-0 flex flex-col gap-1.5 -ml-3 -translate-x-[100%] top-20">
								<div className="w-16">
									<Key
										keyLabel="M4"
										description="Move Backward"
										isShiftPressed={isShiftPressed}
									/>
								</div>
								<div className="w-16">
									<Key
										keyLabel="M5"
										description="Jump"
										isShiftPressed={isShiftPressed}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
