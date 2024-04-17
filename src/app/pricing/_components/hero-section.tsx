import * as React from "react";
import { FreeTier } from "./free-tier";
import { PremiumTier } from "./premium-tier";

export function HeroSection() {
	return (
		<div className="flex items-center py-12 lg:py-24">
			<div className="flex flex-col items-start space-y-6">
				<h1 className="text-3xl font-bold tracking-tighter lg:text-6xl">
					Get Everything. One-time Payment.
				</h1>
				<p className="text-balance">
					Start with a free plan, then unlock all the features for a simple
					one-time payment.
				</p>
				<div className="container grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
					<FreeTier />
					<PremiumTier />
				</div>
			</div>
		</div>
	);
}
