"use client";

import { useEffect } from "react";

interface AdBannerProps {
	dataAdSlot: string;
	className?: string;
}

declare global {
	interface Window {
		adsbygoogle: unknown[];
	}
}

export function AdBanner({ dataAdSlot, className = "" }: AdBannerProps) {
	useEffect(() => {
		try {
			if (typeof window !== "undefined") {
				window.adsbygoogle = window.adsbygoogle || [];
				window.adsbygoogle.push({});
			}
		} catch (err) {
			// biome-ignore lint/suspicious/noConsole: Debug
			console.error("Error loading AdSense script", err);
		}
	}, []);

	return (
		<div className={className}>
			<ins
				className="adsbygoogle"
				style={{ display: "block", height: "90px" }}
				data-ad-client="ca-pub-9755830363670758"
				data-ad-slot={dataAdSlot}
				data-ad-format="horizontal"
			/>
		</div>
	);
}
