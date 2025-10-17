import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import AdSense from "@/components/adsense";
import { Navbar } from "@/components/navbar";
import { StructuredData } from "@/components/structured-data";
import { BASE_URL, GOOGLE_AD_CLIENT_ID } from "@/lib/constants";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: "Dog's Key Bindings for World of Warcraft | WoW Keybind Guide",
		template: "%s | Dog's Key Bindings",
	},
	description:
		"Comprehensive World of Warcraft keybind setup guide by Dog. Optimize your WoW gameplay with efficient keyboard layouts, macros, and click-casting configurations for all classes.",
	keywords: [
		"World of Warcraft keybinds",
		"WoW keybindings",
		"Dog keybinds",
		"WoW keyboard layout",
		"WoW macros",
		"click casting WoW",
		"MMO keybinds",
		"WoW optimization",
		"World of Warcraft guide",
		"gaming keybinds",
		"WoW UI setup",
	],
	authors: [{ name: "Dog" }],
	creator: "Dog",
	publisher: "Dog",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: BASE_URL,
		title: "Dog's Key Bindings for World of Warcraft | WoW Keybind Guide",
		description:
			"Comprehensive World of Warcraft keybind setup guide by Dog. Optimize your WoW gameplay with efficient keyboard layouts, macros, and click-casting configurations.",
		siteName: "Dog's Key Bindings",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Dog's Key Bindings for World of Warcraft",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Dog's Key Bindings for World of Warcraft",
		description:
			"Comprehensive WoW keybind setup guide. Optimize your gameplay with efficient keyboard layouts and macros.",
		images: ["/og-image.png"],
		creator: "@DogWoW",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: BASE_URL,
	},
	category: "gaming",
	verification: {
		google: "your-google-verification-code",
		// Add other verification codes as needed
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="google-adsense-account" content={GOOGLE_AD_CLIENT_ID} />
				<AdSense pId={GOOGLE_AD_CLIENT_ID} />
				<StructuredData />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
