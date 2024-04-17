import * as React from "react";
import { Check, X } from "lucide-react";
import { cn } from "~/util/cn";

const freeTierList = [
	{
		title: "Basic Task Management",
	},
	{
		title: "Limited Subtasks",
	},
	{
		title: "Basic Task Prioritization",
	},
	{
		title: "Basic Reminders",
	},
	{
		title: "No Recurring Tasks",
	},
	{
		title: "Limited Task Dependencies",
	},
	{
		title: "Basic Task Notes",
	},
	{
		title: "Basic Labels or Tags",
	},
	{
		title: "Limited Task Views",
	},
	{
		title: "Task Templates",
		isFree: false,
	},
];

export function FreeTier() {
	return (
		<div className="card bg-neutral-200 shadow-xl lg:card-side">
			<div className="card-body">
				<h1
					className={cn(
						"card-title",
						"text-2xl font-bold leading-none tracking-tighter",
					)}
				>
					Free Tier
				</h1>
				<p className="py-6">
					Get started with essential task management features for free. Create
					tasks, set due dates, and mark them as complete. Basic priority levels
					and limited subtasks included.
				</p>
				<ul className="flex flex-col space-y-4">
					{freeTierList.map((item, index) => (
						<li key={index} className="inline-flex items-center justify-center">
							{
								<>
									{item.isFree === false ? (
										<X className="mr-2" />
									) : (
										<Check className="mr-2" />
									)}
									<p
										className={cn(
											"text-sm/relaxed",
											item.isFree === false ? "line-through" : "",
										)}
									>
										{item.title}
									</p>
								</>
							}
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
						<Check className="h-4 w-4 mr-1" /> Enabled
					</button>
				</div>
			</div>
		</div>
	);
}
