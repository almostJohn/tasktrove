import * as React from "react";
import { Ban, Check } from "lucide-react";
import { cn } from "~/util/cn";

const premiumTierList = [
	{
		title: "Unlimited Subtasks",
	},
	{
		title: "Task Prioritization",
	},
	{
		title: "Due Dates and Reminders",
	},
	{
		title: "Recurring Tasks",
	},
	{
		title: "Task Dependencies",
	},
	{
		title: "Task Notes and Attachments",
	},
	{
		title: "Unlimited Labels or Tags",
	},
	{
		title: "Customizable Task Views",
	},
	{
		title: "Task Templates",
	},
	{
		title: "Bulk Actions",
	},
	{
		title: "Task Search and Filters",
	},
	{
		title: "Unlimited Tasks can be Created",
	},
];

export function PremiumTier() {
	return (
		<div className="card bg-neutral-200 shadow-xl lg:card-side">
			<div className="card-body">
				<h1
					className={cn(
						"card-title",
						"text-2xl font-bold leading-none tracking-tighter",
					)}
				>
					Premium Tier
				</h1>
				<p className="py-6">
					Unlock advanced task management tools for ultimate productivity. Enjoy
					unlimited subtasks, priority levels, recurring tasks, collaboration
					features, and more. Elavate your productivity with priority support.
				</p>
				<ul className="flex flex-col space-y-4">
					{premiumTierList.map((item, index) => (
						<li key={index} className="inline-flex items-center justify-center">
							<Check className="mr-2 text-green-600" />
							<p className="text-sm/relaxed">{item.title}</p>
						</li>
					))}
				</ul>
				<div className="pt-12 card-actions justify-center w-full">
					<button
						className={cn(
							"inline-flex border-transparent bg-lightBlurple px-6 py-2 w-full rounded-lg items-center justify-center text-center text-white text-sm font-medium",
							"btn-disabled",
						)}
					>
						<Ban className="h-4 w-4 mr-1" /> Coming Soon
					</button>
				</div>
			</div>
		</div>
	);
}
