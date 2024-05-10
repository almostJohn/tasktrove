import * as React from "react";
import type { Metadata } from "next";
import { FreeTier } from "./_components/free-tier";
import { PremiumTier } from "./_components/premium-tier";

export const metadata: Metadata = {
	title: "Pricing",
};

export default function Page() {
	return (
		<>
			<div className="container relative px-4 py-8">
				<div className="flex flex-col items-center justify-center">
					<div className="text-center">
						<h1 className="text-3xl font-bold leading-none tracking-tight lg:text-5xl">
							Worry about your tasks, not your bill.
						</h1>
						<p className="py-6 font-light text-lg text-neutral-500">
							We wanted pricing to be as simple as possible, No calculator
							needed.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
						<FreeTier />
						<PremiumTier />
					</div>
				</div>
			</div>
		</>
	);
}
