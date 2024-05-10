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
			<div className="max-w-7xl mx-auto container">{children}</div>
		</>
	);
}
