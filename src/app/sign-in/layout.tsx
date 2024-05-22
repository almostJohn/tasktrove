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
		<div className="mx-auto min-h-screen flex flex-col items-center justify-center px-4">
			{children}
		</div>
	);
}
