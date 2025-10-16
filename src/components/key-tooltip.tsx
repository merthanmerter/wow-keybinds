"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface KeyTooltipProps {
	keyLabel: string;
	imageUrl: string;
	children: React.ReactNode;
}

export const KeyTooltip: React.FC<KeyTooltipProps> = ({
	keyLabel,
	imageUrl,
	children,
}) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div className="w-full h-full">{children}</div>
			</TooltipTrigger>
			<TooltipContent
				side="top"
				sideOffset={12}
				className="bg-accent border-2 border-yellow-600 rounded-lg shadow-2xl p-3"
			>
				{/* biome-ignore lint/performance/noImgElement: Allowed */}
				<img
					src={imageUrl}
					alt={`${keyLabel} keybind`}
					className="rounded max-w-none"
					style={{ width: "300px", height: "auto" }}
				/>
			</TooltipContent>
		</Tooltip>
	);
};
