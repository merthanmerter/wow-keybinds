// import Script from "next/script";

type AdsenseTypes = {
	pId: string;
};

const AdSense = ({ pId }: AdsenseTypes) => {
	return (
		// <Script
		// 	async
		// 	src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
		// 	crossOrigin="anonymous"
		// 	strategy="afterInteractive"
		// />
		<script
			key="adsense-script"
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
			crossOrigin="anonymous"
		></script>
	);
};

export default AdSense;
