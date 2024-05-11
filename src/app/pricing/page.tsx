import * as React from "react";
import { FreeTier } from "./_components/free-tier";
import { PremiumTier } from "./_components/premium-tier";

export default function Page() {
	return (
		<>
			<div className="flex flex-col items-center justify-center space-y-6">
				<div className="text-center">
					<h1 className="text-3xl font-bold leading-none tracking-tighter md:text-5xl">
						Worry about your tasks, not your bill.
					</h1>
					<p className="py-6 text-lg font-light text-neutral-500">
						We wanted pricing to be as simple as possible, No calculator needed.
					</p>
				</div>
				<div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
					<FreeTier />
					<PremiumTier />
				</div>
			</div>
		</>
	);
}
