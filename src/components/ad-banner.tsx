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
		<ins
			className="adsbygoogle"
			style={{ display: "block", height: "90px" }}
			data-ad-client={GOOGLE_AD_CLIENT_ID}
			data-ad-slot={dataAdSlot}
			data-ad-format={dataAdFormat}
			data-full-width-responsive={dataFullWidthResponsive}
		></ins>
	);
};
