import * as React from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { cn } from "~/util/cn";
import { buttonVariants } from "~/components/ui/button";

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
				"card shadow lg:card-side",
				"bg-transparent rounded-box border border-neutral-300",
			)}
		>
			<div className="card-body">
				<h1
					className={cn(
						"card-title",
						"font-bold text-2xl leading-none tracking-tighter",
					)}
				>
					Free
				</h1>
				<p className="py-2 font-light">
					Everything you need to start making tasks.
				</p>
				<div className="inline-flex border border-neutral-300 bg-transparent rounded-md px-6 py-3 items-center justify-center">
					<h2 className="text-5xl font-bold">$0</h2>
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
									<X className="w-5" />
									<p className="ml-3 line-through text-neutral-500">
										{item.title}
									</p>
								</>
							) : (
								<>
									<Check className="w-5" />
									<p className="ml-3">{item.title}</p>
								</>
							)}
						</div>
					))}
				</div>
				<hr className="border-t border-slate-300 visible w-full" />
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
