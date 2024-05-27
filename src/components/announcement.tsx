import * as React from "react";
import { PartyPopper } from "lucide-react";

export function Announcement() {
	return (
		<div className="inline-flex items-center justify-center px-6 py-2 border border-neutral-300 bg-transparent rounded-lg">
			<PartyPopper className="mr-2 h-5 w-5" />
			<h1 className="text-sm font-mono">
				Limited Offer - Lifetime access for just{" "}
				<span className="line-through text-neutral-500">$82</span> $20
			</h1>
		</div>
	);
}
