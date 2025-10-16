"use client";

import { useEffect, useMemo } from "react";
import { BASE_URL } from "@/lib/constants";

export const StructuredData = () => {
	const jsonLd = useMemo(
		() => ({
			"@context": "https://schema.org",
			"@type": "WebSite",
			name: "Dog's Key Bindings",
			description:
				"Comprehensive World of Warcraft keybind setup guide by Dog. Optimize your WoW gameplay with efficient keyboard layouts, macros, and click-casting configurations.",
			url: BASE_URL,
			inLanguage: "en-US",
			publisher: {
				"@type": "Person",
				name: "Dog",
			},
			about: {
				"@type": "VideoGame",
				name: "Dog's Key Bindings",
				publisher: {
					"@type": "Organization",
					name: "Verkron",
					url: "https://verkron.com",
				},
			},
			potentialAction: {
				"@type": "SearchAction",
				target: `${BASE_URL}?q={search_term_string}`,
				"query-input": "required name=search_term_string",
			},
		}),
		[],
	);

	useEffect(() => {
		// Only add the script if it doesn't already exist
		const existingScript = document.querySelector(
			'script[type="application/ld+json"][data-structured-data="true"]',
		);
		if (!existingScript) {
			const script = document.createElement("script");
			script.type = "application/ld+json";
			script.setAttribute("data-structured-data", "true");
			script.textContent = JSON.stringify(jsonLd);
			document.head.appendChild(script);
		}
	}, [jsonLd]);

	return null;
};
