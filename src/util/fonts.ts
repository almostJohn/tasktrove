import { Inter, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mono",
});

export const fontSans = GeistSans;
