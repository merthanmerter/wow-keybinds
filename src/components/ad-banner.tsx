"use client";

import { useEffect } from "react";
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
	useEffect(() => {
		try {
			window.adsbygoogle = window.adsbygoogle || [];
			window.adsbygoogle.push({});
		} catch (error) {
			// biome-ignore lint/suspicious/noConsole: Debug
			console.log(error);
		}
	}, []);

	return (
		<div className="block h-[90px] border border-dashed border-border/50 rounded-md p-2 w-full mx-auto my-4">
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
