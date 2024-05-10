import * as React from "react";
import Link from "next/link";
import { Check, X, Plus, Filter, List, Search } from "lucide-react";
import { cn } from "~/util/cn";
import { buttonVariants } from "~/components/ui/button";

export function DashboardComponent() {
	return (
		<>
			<div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
				<div className="hidden border-r bg-neutral-200/40 lg:block">
					<div className="flex h-full max-h-screen flex-col gap-2">
						<div className="flex h-[60px] items-center border-b px-6">
							<h1 className="font-semibold">Your Tasks</h1>
						</div>
						<div className="flex-1 overflow-auto py-2">
							<nav className="grid items-start px-4 text-sm font-medium">
								<Link
									href="#"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:text-neutral-900"
								>
									<List className="h-4 w-4" />
									All
								</Link>
								<Link
									href="#"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:text-neutral-900"
								>
									<Check className="h-4 w-4" />
									Completed
								</Link>
								<Link
									href="#"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:text-neutral-900"
								>
									<X className="h-4 w-4" />
									Incomplete
								</Link>
							</nav>
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<header className="flex h-14 items-center gap-4 border-b bg-neutral-200/40 px-6 lg:h-[60px]">
						<h1 className="font-semibold lg:hidden">Tasks</h1>
						<div className="flex-1">
							<div className="relative">
								<Search className="absolute left-3 top-2 h-4 w-4" />
								<input
									type="search"
									placeholder="Search tasks..."
									className={cn(
										"input input-sm input-bordered border-neutral-300 bg-neutral-100 w-full appearance-none",
										"pl-9 md:w-2/3 lg:w-1/3",
									)}
								/>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<details className="dropdown dropdown-end">
								<summary
									className={cn(
										buttonVariants({ variant: "outline" }),
										"m-1 cursor-pointer px-2 py-1.5 items-center justify-center lg:px-4 lg:py-2",
									)}
								>
									<span className="hidden lg:flex">
										<Filter className="h-4 w-4 mr-2" /> Filter
									</span>
									<span className="lg:hidden">
										<Filter className="h-4 w-4" />
									</span>
								</summary>
								<ul className="p-2 shadow menu dropdown-content z-[1] bg-neutral-100 border border-neutral-300 rounded-lg w-48">
									<div className="inline-flex items-center px-3 py-4 mb-2 text-lg font-bold leading-none tracking-tighter border-b border-neutral-300 w-full">
										Filter by:
									</div>
									<li>
										<Link href="#">Completed</Link>
									</li>
									<li>
										<Link href="#">Incomplete</Link>
									</li>
									<li>
										<Link href="#">Due Today</Link>
									</li>
									<li>
										<Link href="#">Due This Week</Link>
									</li>
								</ul>
							</details>
							<button className={cn(buttonVariants(), "hidden lg:flex")}>
								<Plus className="h-4 w-4 mr-2" />
								Add Task
							</button>
							<button className={cn(buttonVariants(), "px-2 py-1.5 lg:hidden")}>
								<Plus className="h-4 w-4" />
							</button>
						</div>
					</header>
				</div>
			</div>
		</>
	);
}
