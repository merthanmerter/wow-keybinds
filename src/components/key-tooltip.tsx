"use client";

import Image from "next/image";
import { useState } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/is-mobile";

interface KeyTooltipProps {
	keyLabel: string;
	imageUrl: string;
	children: React.ReactNode;
	unoptimized?: boolean;
}

export const KeyTooltip: React.FC<KeyTooltipProps> = ({
	keyLabel,
	imageUrl,
	children,
	unoptimized = false,
}) => {
	const [open, setOpen] = useState(false);
	const isMobile = useIsMobile();

	const handleClick = () => {
		if (isMobile) {
			setOpen(!open);
		}
	};

	return (
		<Tooltip open={isMobile ? open : undefined}>
			<TooltipTrigger asChild onClick={handleClick}>
				<div className="w-full h-full">{children}</div>
			</TooltipTrigger>
			<TooltipContent
				side="top"
				sideOffset={12}
				className="bg-accent border-2 border-yellow-600 rounded-lg shadow-2xl p-3"
				onPointerDownOutside={() => isMobile && setOpen(false)}
			>
				<Image
					width={300}
					height={300}
					src={imageUrl}
					alt={`${keyLabel} keybind`}
					className="rounded max-w-none"
					unoptimized={unoptimized}
				/>
			</TooltipContent>
		</Tooltip>
	);
};
