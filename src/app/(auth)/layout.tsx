import * as React from "react";

export default function AuthLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4">
			{children}
		</div>
	);
}
