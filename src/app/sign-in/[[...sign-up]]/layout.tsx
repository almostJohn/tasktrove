import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign In",
};

export default function SignInLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className="mx-auto container flex flex-col items-center py-6 px-4 md:py-12">
			{children}
		</div>
	);
}
