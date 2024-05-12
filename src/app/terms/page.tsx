import * as React from "react";
import { TermsContent } from "./_components/terms-content";

export default function Page() {
	return (
		<>
			<div className="flex flex-col items-center justify-center space-y-6">
				<div className="text-center">
					<h1 className="text-3xl font-bold leading-none tracking-tighter md:text-5xl">
						Terms and Conditions
					</h1>
				</div>
				<div className="flex flex-col items-center px-4">
					<TermsContent />
				</div>
			</div>
		</>
	);
}
