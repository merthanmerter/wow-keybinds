"use client";

interface AdBannerProps {
	dataAdSlot: string;
	dataAdFormat?: string;
	dataFullWidthResponsive?: boolean;
	className?: string;
}

export function AdBanner({
	dataAdSlot,
	dataAdFormat = "auto",
	dataFullWidthResponsive = true,
	className = "",
}: AdBannerProps) {
	return (
		<div className={className}>
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client="ca-pub-9755830363670758"
				data-ad-slot={dataAdSlot}
				data-ad-format={dataAdFormat}
				data-full-width-responsive={dataFullWidthResponsive.toString()}
			/>
		</div>
	);
}
