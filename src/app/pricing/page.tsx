import * as React from "react";
import type { Metadata } from "next";
import { cn } from "~/util/cn";
import { Check, X } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";

export const metadata: Metadata = {
	title: "Pricing",
};

const freeTierList = [
	{
		title: "Limited Task Templates",
	},
	{
		title: "Due Dates and Reminders",
		isFree: false,
	},
	{
		title: "Recurring Tasks",
		isFree: false,
	},
	{
		title: "Access to Tags",
		isFree: false,
	},
	{
		title: "Customizable Task Views",
		isFree: false,
	},
	{
		title: "Bulk Actions",
		isFree: false,
	},
	{
		title: "Access to Search and Filters",
	},
];

const premiumTierPst = [
	{
		title: "Access to Task Templates",
	},
	{
		title: "Due Dates and Reminders",
	},
	{
		title: "Recurring Tasks",
	},
	{
		title: "Access to Tags",
	},
	{
		title: "Customizable Task Views",
	},
	{
		title: "Bulk Actions",
	},
	{
		title: "Access to Search and Filters",
	},
];

export default function Page() {
	return (
		<div className="mx-auto max-w-6xl container flex flex-col justify-center pt-8 pb-24 lg:pt-16 lg:pb-40">
			<div className="flex flex-col">
				<div className="px-4">
					<h1 className="text-3xl font-bold leading-none tracking-tighter lg:text-5xl">
						Get Everything. One-time Payment.
					</h1>
					<p className="text-xl font-light py-6 lg:text-2xl">
						Start with a free plan, then unlock all the features for a simple
						one-time payment.
					</p>
				</div>
				<div className="flex flex-col pt-6 justify-center gap-4 lg:flex-row">
					<div className="mx-auto max-w-xl card lg:card-side bg-transparent border border-neutral-200 shadow">
						<div className="card-body">
							<h2
								className={cn("card-title", "font-bold text-2xl leading-none")}
							>
								Free Tier.
							</h2>
							<p className="py-4">
								Get started with essential task management features for free.
							</p>
							<div className="inline-flex px-4 py-6 bg-transparent border border-neutral-200 rounded-lg items-center justify-center">
								<h1 className="text-4xl font-bold leading-none lg:text-5xl">
									$0
								</h1>
								<div className="ml-2 flex flex-col">
									<p className="text-xs font-medium">free</p>
									<p className="text-xs text-neutral-500">forever</p>
								</div>
							</div>
							<div className="py-6 mx-auto flex flex-col justify-center gap-3">
								{freeTierList.map((item, index) => (
									<>
										<div className="flex items-center justify-center">
											{item.isFree === false ? (
												<X className="w-4" />
											) : (
												<Check className="w-4" />
											)}
											<p
												className={cn(
													"ml-2",
													item.isFree === false
														? "line-through text-neutral-500"
														: "",
												)}
												key={index}
											>
												{item.title}
											</p>
										</div>
									</>
								))}
							</div>
							<hr className="border-t border-neutral-300 visible w-full" />
							<div className="mx-auto flex justify-center items-center w-full pt-6">
								<button
									className={cn(
										buttonVariants({ variant: "outline" }),
										"w-full cursor-not-allowed hover:bg-transparent",
									)}
								>
									Activated
								</button>
							</div>
						</div>
					</div>
					<div className="mx-auto max-w-xl card lg:card-side bg-transparent border border-neutral-200 shadow">
						<div className="card-body">
							<h2
								className={cn("card-title", "font-bold text-2xl leading-none")}
							>
								Premium Tier.
							</h2>
							<p className="py-4">
								Unlock advanced task management tools for ultimate productivity.
							</p>
							<div className="inline-flex px-4 py-6 bg-transparent border border-neutral-200 rounded-lg items-center justify-center">
								<h1 className="text-4xl font-bold leading-none lg:text-5xl">
									$84
								</h1>
								<div className="ml-2 flex flex-col">
									<p className="text-xs font-medium">one-time payment</p>
									<p className="text-xs text-neutral-500">plus local taxes</p>
								</div>
							</div>
							<div className="py-6 mx-auto flex flex-col justify-center gap-3">
								{premiumTierPst.map((item, index) => (
									<>
										<div className="flex items-center justify-center">
											<Check className="w-4" />
											<p className="ml-2" key={index}>
												{item.title}
											</p>
										</div>
									</>
								))}
							</div>
							<hr className="border-t border-neutral-300 visible w-full" />
							<div className="mx-auto flex justify-center items-center w-full pt-6">
								<button className={cn(buttonVariants(), "w-full")}>
									Get Started{" "}
									<span className="ml-1 italic">— it&apos;s free</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
