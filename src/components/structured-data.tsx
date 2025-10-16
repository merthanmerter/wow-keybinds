import { BASE_URL } from "@/lib/constants";

export const StructuredData = () => {
	const jsonLd = {
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
			name: "World of Warcraft",
			publisher: {
				"@type": "Organization",
				name: "Blizzard Entertainment",
			},
		},
		potentialAction: {
			"@type": "SearchAction",
			target: `${BASE_URL}?q={search_term_string}`,
			"query-input": "required name=search_term_string",
		},
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
};
