import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono } from "~/util/fonts";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";
import { SiteHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";

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
					"bg-white text-black antialiased selection:bg-teal-300/60",
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<div className="mx-auto container relative">
					<SiteHeader />
					{children}
					<SiteFooter />
				</div>
			</body>
		</html>
	);
}
