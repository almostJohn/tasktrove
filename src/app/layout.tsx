import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono } from "~/util/fonts";
import { cn } from "~/util/cn";
import { siteConfig } from "~/config/site";
import { SiteHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";

import "../styles/globals.css";
import "../styles/default-styles.css";

export const metadata: Metadata = {
	title: siteConfig.title,
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
					"bg-neutral-100 text-neutral-900 antialiased",
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<div className="mx-auto container flex flex-col items-center p-4">
					<SiteHeader />
					{children}
					<SiteFooter />
				</div>
			</body>
		</html>
	);
}
