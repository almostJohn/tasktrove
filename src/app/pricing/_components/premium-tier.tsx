import * as React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "~/util/cn";
import { buttonVariants } from "~/components/ui/button";

const premiumTierList = [
	{
		title: "Access to task templates",
	},
	{
		title: "Access to search and filters",
	},
	{
		title: "Due dates and reminders",
	},
	{
		title: "Unlimited tasks can be created",
	},
];

export function PremiumTier() {
	return (
		<div
			className={cn(
				"card lg:card-side",
				"bg-transparent border border-slate-900",
			)}
		>
			<div className="card-body">
				<h1
					className={cn(
						"card-title",
						"font-bold text-2xl leading-none tracking-tighter",
					)}
				>
					Premium Tier
				</h1>
				<p className="py-2 font-light">
					Access to task templates. Unlock all features.
				</p>
				<div className="inline-flex border border-slate-900 bg-transparent rounded-md px-6 py-3 items-center justify-center">
					<h2 className="text-5xl font-bold">$20</h2>
					<div className="ml-2 flex flex-col">
						<p className="text-xs font-medium">one-time payment</p>
						<p className="text-xs text-slate-500">plus local taxes</p>
					</div>
				</div>
				<div className="py-6 mx-auto flex flex-col justify-center gap-4">
					{premiumTierList.map((item, index) => (
						<div key={index} className="flex items-center justify-center">
							<Check className="text-teal w-5" />
							<p className="ml-3">{item.title}</p>
						</div>
					))}
				</div>
				<hr className="border-t border-slate-300 visible w-full" />
				<div className="mx-auto w-full flex items-center justify-center pt-6">
					<Link href="/sign-in" className={cn(buttonVariants(), "w-full")}>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
}
