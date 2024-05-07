import * as React from "react";
import type { Metadata } from "next";
import { FreeTier } from "./_components/free-tier";
import { PremiumTier } from "./_components/premium-tier";

export const metadata: Metadata = {
	title: "Pricing",
};

export default function Page() {
	return (
		<div className="mx-auto container px-8 pt-2 pb-12 lg:pt-5 lg:pb-16">
			<div className="flex flex-col items-center justify-center">
				<div className="text-center">
					<h1 className="text-5xl font-bold leading-none tracking-tight">
						Worry about your tasks,{" "}
						<span className="text-teal">not your bill.</span>
					</h1>
					<p className="py-6 font-light text-lg text-slate-500">
						We wanted pricing to be as simple as possible, No calculator needed.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
					<FreeTier />
					<PremiumTier />
				</div>
			</div>
		</div>
	);
}
