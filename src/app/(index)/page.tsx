import * as React from "react";
import Link from "next/link";
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "~/components/page-header";
import { Announcement } from "~/components/announcement";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function IndexPage() {
	return (
		<>
			<main className="flex-1">
				<div className="container relative">
					<PageHeader>
						<Announcement />
						<PageHeaderHeading>
							Streamlined Task Management for Busy Professionals
						</PageHeaderHeading>
						<PageHeaderDescription className="text-balance">
							Simplify your task organization and prioritization, liberating
							your mind from clutter. Embrace efficiency today with seamless
							task management.
						</PageHeaderDescription>
						<PageActions>
							<Link href="/sign-in" className={cn(buttonVariants())}>
								Get Started
							</Link>
							<Link
								href="/pricing"
								className={cn(buttonVariants({ variant: "outline" }))}
							>
								View Pricing
							</Link>
						</PageActions>
					</PageHeader>
				</div>
			</main>
		</>
	);
}
