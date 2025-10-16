import type React from "react";
import { cn } from "@/lib/utils";

interface KeyProps {
	keyLabel: string;
	description: string;
	priority?: "1st Priority" | "2nd Priority";
	modifier?: boolean;
	modifierDescription?: string;
	isShiftPressed: boolean;
	hasModifier?: boolean;
	className?: string;
}

export const Key: React.FC<KeyProps> = ({
	keyLabel,
	description,
	// priority,
	// modifier = false,
	modifierDescription,
	isShiftPressed,
	hasModifier = false,
	className,
}) => {
	// const getBgColor = () => {
	// 	if (modifier) return "bg-slate-700 hover:bg-slate-600";
	// 	switch (priority) {
	// 		case "1st Priority":
	// 			return "bg-amber-600 hover:bg-amber-500";
	// 		case "2nd Priority":
	// 			return "bg-blue-600 hover:bg-blue-500";
	// 		default:
	// 			return "bg-slate-600 hover:bg-slate-500";
	// 	}
	// };

	const isDimmed = isShiftPressed && !hasModifier;
	const displayText =
		isShiftPressed && hasModifier && modifierDescription
			? modifierDescription
			: description;

	return (
		<div className="h-16 w-full">
			<div
				className={cn`
          h-full w-full
          rounded-md
          shadow-md
          transition-all duration-150
          hover:shadow-lg hover:-translate-y-0.5
          active:translate-y-0 active:shadow-sm
          cursor-pointer
          flex flex-col items-center justify-center
          border border-black/20
          px-1
          ${isDimmed ? "opacity-30" : "opacity-100"}
          bg-slate-600 hover:bg-slate-500
          ${className || ""}
        `}
			>
				<div className="text-lg font-bold text-white leading-tight">
					{keyLabel}
				</div>
				<div className="text-xs text-white/80 mt-0.5 leading-tight text-center">
					{displayText}
				</div>
			</div>
		</div>
	);
};
