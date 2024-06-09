import * as React from "react";
import type { Metadata } from "next";
import { PricingCard } from "~/components/pricing/pricing-card";

export const metadata: Metadata = {
	title: "Pricing",
};

const basicPlan = [
	{
		title: "Task Templates",
		isFree: false,
	},
	{
		title: "Search and Filters",
	},
	{
		title: "Due Dates and Reminders",
		isFree: false,
	},
	{
		title: "Up to 10 Tasks",
	},
];

const proPlan = [
	{
		title: "Task Templates",
	},
	{
		title: "Search and Filters",
	},
	{
		title: "Due Dates and Reminders",
	},
	{
		title: "Unlimited Tasks",
	},
];

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center py-6 px-4 md:py-12">
			<div className="mx-auto text-center">
				<h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
					Worry about your tasks, not your bill.
				</h1>
				<p className="py-6 text-lg text-balance font-light text-foreground">
					We wanted pricing to be as simple as possible, no calculator needed.
				</p>
			</div>
			<div className="mx-auto grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
				<PricingCard
					title="Basic"
					description="For individuals looking to organize anything."
					tag="Free"
					price="$0"
					priceDescription="/month"
					items={basicPlan}
				/>
				<PricingCard
					title="Pro"
					description="Access to task templates. Unlock all features."
					tag="Premium"
					price="$20"
					priceDescription="/month"
					items={proPlan}
				/>
			</div>
		</div>
	);
}
