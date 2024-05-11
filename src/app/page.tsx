import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, LayoutDashboard } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/util/cn";

export default function IndexPage() {
	return (
		<>
			<div className="mx-auto container">
				<div className="hero py-7 md:py-12">
					<div className="hero-content text-center">
						<div className="max-w-md">
							<Link
								href="/dashboard"
								className="inline-flex px-4 py-2 rounded-full bg-transparent border border-neutral-200 items-center text-center text-sm font-medium hover:border-neutral-300"
							>
								<LayoutDashboard className="h-5 w-5 mr-2" />
								<span>Check out Dashboard</span>
								<ArrowRightIcon className="h-5 w-5 ml-2" />
							</Link>
							<h1 className="mt-4 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
								Streamlined Task Management for Busy Professionals
							</h1>
							<p className="py-6 text-lg font-light text-neutral-500">
								Simplify your task organization and prioritization, liberating
								your mind from clutter. Embrace efficiency today with seamless
								task management.
							</p>
							<div className="flex items-center justify-center w-full gap-4">
								<Link href="/sign-in" className={cn(buttonVariants())}>
									Get Started
								</Link>
								<Link
									href="/pricing"
									className={cn(buttonVariants({ variant: "outline" }))}
								>
									View Pricing
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
