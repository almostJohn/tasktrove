import * as React from "react";
import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { inter, jetBrainsMono, fontSans } from "~/util/fonts";
import { cn } from "~/util/cn";
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
	const { userId } = auth();

	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={cn(
						"bg-neutral-100 text-neutral-900 antialiased",
						fontSans.variable,
						inter.variable,
						jetBrainsMono.variable,
					)}
				>
					<div className="mx-auto min-h-screen flex flex-col items-center">
						<SiteHeader />
						{children}
						{!userId && <SiteFooter />}
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
