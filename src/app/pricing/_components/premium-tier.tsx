import * as React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

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
				"card shadow md:card-side",
				"bg-white rounded-lg border-2 border-teal-500",
			)}
		>
			<div className="card-body">
				<h1
					className={cn(
						"card-title",
						"text-xl font-bold leading-tight tracking-tighter md:text-2xl",
					)}
				>
					Pro
				</h1>
				<p className="py-4 text-sm font-medium">
					Access to task templates. Unlock all features.
				</p>
				<div className="inline-flex items-center justify-center w-full px-4 py-3 border border-slate-300 bg-transparent text-sm font-medium rounded-md">
					<h1 className="text-4xl font-bold leading-none">$20</h1>
					<div className="flex flex-col ml-2">
						<p className="text-xs font-medium">one-time paymant</p>
						<p className="text-xs text-slate-500">plus local taxes</p>
					</div>
				</div>
				<div className="py-4 mx-auto flex flex-col justify-center gap-4">
					{premiumTierList.map((item, i) => (
						<div key={i} className="flex items-center justify-center">
							<>
								<Check className="h-4 w-4 shrink-0 text-teal-500" />
								<p className="ml-3">{item.title}</p>
							</>
						</div>
					))}
				</div>
				<div className="pt-6 border-t border-slate-300 w-full visible">
					<div className="flex items-center justify-center w-full">
						<Link
							href="/sign-in"
							className={cn(
								buttonVariants({ className: "bg-teal-500 hover:bg-teal-600" }),
								"w-full",
							)}
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
