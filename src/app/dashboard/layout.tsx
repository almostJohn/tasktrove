import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function DashboardLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<>
			<div className="mx-auto flex container flex-col items-center py-2 px-4 md:py-4">
				{children}
			</div>
		</>
	);
}
