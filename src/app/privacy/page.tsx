import * as React from "react";
import { PrivacyContent } from "./_components/privacy-content";

export default function Page() {
	return (
		<>
			<div className="flex flex-col items-center justify-center space-y-6">
				<div className="text-center">
					<h1 className="text-3xl font-bold leading-none tracking-tighter md:text-5xl">
						Privacy Policy
					</h1>
				</div>
				<div className="flex flex-col items-center px-4">
					<PrivacyContent />
				</div>
			</div>
		</>
	);
}
