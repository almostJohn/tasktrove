import * as React from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

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
				"bg-white rounded-lg border border-neutral-300",
			)}
		>
			<div className="card-body">
				<h1
					className={cn(
						"card-title",
						"text-xl font-bold leading-tight tracking-tighter md:text-2xl",
					)}
				>
					Basic
				</h1>
				<p className="py-4 text-sm font-medium">
					For individuals looking to organize anything.
				</p>
				<div className="inline-flex items-center justify-center w-full px-4 py-3 border border-slate-300 bg-transparent text-sm font-medium rounded-md">
					<h1 className="text-4xl font-bold leading-none">$0</h1>
					<div className="flex flex-col ml-2">
						<p className="text-xs font-medium">free</p>
						<p className="text-xs text-slate-500">forever</p>
					</div>
				</div>
				<div className="py-4 mx-auto flex flex-col justify-center gap-4">
					{freeTierList.map((item, i) => (
						<div key={i} className="flex items-center justify-center">
							{item.isFree === false ? (
								<>
									<X className="h-4 w-4 shrink-0 text-red-600" />
									<p className="ml-3 line-through text-slate-500">
										{item.title}
									</p>
								</>
							) : (
								<>
									<Check className="h-4 w-4 shrink-0 text-teal-500" />
									<p className="ml-3">{item.title}</p>
								</>
							)}
						</div>
					))}
				</div>
				<div className="pt-6 border-t border-slate-300 w-full visible">
					<div className="flex items-center justify-center w-full">
						<Link
							href="/sign-in"
							className={cn(buttonVariants({ variant: "outline" }), "w-full")}
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
