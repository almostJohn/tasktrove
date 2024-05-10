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
		title: "Unlimited tasks",
	},
];

export function PremiumTier() {
	return (
		<div
			className={cn(
				"card shadow lg:card-side",
				"bg-transparent rounded-box border border-neutral-900",
			)}
		>
			<div className="card-body">
				<div className="flex justify-between">
					<h1
						className={cn(
							"card-title",
							"font-bold text-2xl leading-none tracking-tighter",
						)}
					>
						Premium
					</h1>
					<div className="inline-flex px-3 py-2 rounded-full bg-neutral-200 border-transparent items-center text-center text-sm font-medium">
						Lifetime
					</div>
				</div>
				<p className="py-2 font-light">
					Access to task templates. Unlock all features.
				</p>
				<div className="inline-flex border border-neutral-900 bg-transparent rounded-md px-6 py-3 items-center justify-center">
					<h2 className="text-5xl font-bold">$20</h2>
					<div className="ml-2 flex flex-col">
						<p className="text-xs font-medium">one-time payment</p>
						<p className="text-xs text-neutral-500">plus local taxes</p>
					</div>
				</div>
				<div className="py-6 mx-auto flex flex-col justify-center gap-4">
					{premiumTierList.map((item, index) => (
						<div key={index} className="flex items-center justify-center">
							<Check className="w-5" />
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
