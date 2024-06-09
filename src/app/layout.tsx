import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono, fontSans } from "~/util/fonts";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";

import "../styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
	icons: {
		other: [
			{
				url: "/favicon.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/favicon.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
};

export const viewport: Viewport = {
	themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
};

export default function RootLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-background text-foreground antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<div className="relative flex min-h-screen flex-col bg-background">
					{children}
				</div>
			</body>
		</html>
	);
}
