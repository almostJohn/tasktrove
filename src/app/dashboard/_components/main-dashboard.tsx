import * as React from "react";
import Link from "next/link";
import { Plus, Sparkles } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/util/cn";

export function MainDashboard() {
	return (
		<div className="hidden flex-col items-center justify-center pt-8 pb-32 space-y-12 md:flex">
			<div className="flex justify-between w-full px-4">
				<div className="text-3xl font-semibold leading-4">Your Tasks</div>
				<div className="flex items-end">
					<Link href="/dashboard/new" className={cn(buttonVariants())}>
						<Plus className="w-4 mr-2" />
						<span>Create a new task</span>
					</Link>
				</div>
			</div>
			<div className="hero-content">
				<div className="max-w-md">
					<div className="flex items-center justify-center py-4">
						<Sparkles className="h-12 w-12 text-neutral-500" />
					</div>
					<div className="text-center">
						<h1 className="text-2xl font-bold leading-none tracking-tighter md:text-5xl">
							No tasks found
						</h1>
						<p className="py-6 text-neutral-500">
							Create a task to get started.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
