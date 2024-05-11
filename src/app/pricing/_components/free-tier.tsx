import * as React from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/util/cn";

const freeTierList = [
	{
		title: "Access to task templates",
		isFree: false,
	},
	{
		title: "Access to search and filters",
	},
	{
		title: "Due dates and reminders",
		isFree: false,
	},
	{
		title: "Up to 15 tasks",
	},
];

export function FreeTier() {
	return (
		<div
			className={cn(
				"card shadow md:card-side",
				"bg-white rounded-box border border-neutral-300",
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
						Free
					</h1>
					<div className="inline-flex px-3 py-2 rounded-full bg-neutral-200 border-transparent items-center text-center text-sm font-medium">
						Basic
					</div>
				</div>
				<p className="py-2 font-light">
					Everything you need to start making tasks.
				</p>
				<div className="inline-flex border border-neutral-300 bg-transparent rounded-lg px-6 py-3 items-center justify-center">
					<h3 className="text-4xl font-bold">$0</h3>
					<div className="ml-2 flex flex-col">
						<p className="text-xs font-medium">free</p>
						<p className="text-xs text-neutral-500">forever</p>
					</div>
				</div>
				<div className="py-6 mx-auto flex flex-col justify-center gap-4">
					{freeTierList.map((item, index) => (
						<div key={index} className="flex items-center justify-center">
							{item.isFree === false ? (
								<>
									<X className="h-4 w-4" />
									<p className="ml-3 line-through text-neutral-500">
										{item.title}
									</p>
								</>
							) : (
								<>
									<Check className="h-4 w-4" />
									<p className="ml-3">{item.title}</p>
								</>
							)}
						</div>
					))}
				</div>
				<hr className="border-t border-neutral-300 visible w-full" />
				<div className="mx-auto w-full flex items-center justify-center pt-6">
					<Link
						href="/sign-in"
						className={cn(buttonVariants({ variant: "outline" }), "w-full")}
					>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
}
