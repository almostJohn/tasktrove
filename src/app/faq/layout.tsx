import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQ",
};

export default function FAQLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className="mx-auto max-w-2xl container flex flex-col items-center py-6 px-4 md:py-12">
			{children}
		</div>
	);
}
