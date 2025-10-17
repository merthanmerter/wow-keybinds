"use client";

import { useEffect, useRef } from "react";
import { GOOGLE_AD_CLIENT_ID } from "@/lib/constants";

type AdBannerTypes = {
	dataAdSlot: string;
	dataAdFormat: "horizontal" | "vertical" | "auto";
	dataFullWidthResponsive: "true" | "false";
};

declare global {
	interface Window {
		adsbygoogle: unknown[];
	}
}

export const AdBanner = ({
	dataAdSlot,
	dataAdFormat,
	dataFullWidthResponsive,
}: AdBannerTypes) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const pushAd = () => {
			try {
				if (!containerRef.current) return;

				const width = containerRef.current.offsetWidth;

				// Only push ad if container has proper width (must be > 0)
				if (width > 0) {
					window.adsbygoogle = window.adsbygoogle || [];
					window.adsbygoogle.push({});
				} else {
					// Retry if width is still 0 (common on mobile)
					setTimeout(pushAd, 100);
				}
			} catch (error) {
				// biome-ignore lint/suspicious/noConsole: Debug
				console.log(error);
			}
		};

		// Delay to ensure DOM layout is complete, especially on mobile
		const timer = setTimeout(pushAd, 200);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			ref={containerRef}
			className="block md:h-[90px] border border-dashed border-border/50 rounded-md p-2 w-full mx-auto my-4"
		>
			<ins
				className="adsbygoogle"
				style={{ display: "block", minWidth: "300px" }}
				data-ad-client={GOOGLE_AD_CLIENT_ID}
				data-ad-slot={dataAdSlot}
				data-ad-format={dataAdFormat}
				data-full-width-responsive={dataFullWidthResponsive}
			></ins>
		</div>
	);
};
