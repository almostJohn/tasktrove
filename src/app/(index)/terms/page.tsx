import * as React from "react";
import type { Metadata } from "next";
import { TermsContent } from "~/components/terms/terms-content";

export const metadata: Metadata = {
	title: "Terms",
};

export default function Page() {
	return (
		<div className="mx-auto max-w-2xl flex flex-col items-center py-6 px-4 md:py-12">
			<div className="flex flex-col items-center justify-center space-y-4">
				<div className="text-center">
					<h1 className="text-2xl font-bold leading-tight tracking-tighter md:text-5xl">
						Terms and Conditions
					</h1>
				</div>
				<div className="flex flex-col items-center px-4">
					<TermsContent />
				</div>
			</div>
		</div>
	);
}
