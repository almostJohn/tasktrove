import Link from "next/link";
import * as React from "react";
import { Announcement } from "~/components/announcement";
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "~/components/page-header";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/util/cn";

export default function IndexPage() {
	return (
		<>
			<div className="container relative px-4">
				<PageHeader>
					<Announcement />
					<PageHeaderHeading>
						Streamlined Task Management for Busy Professionals
					</PageHeaderHeading>
					<PageHeaderDescription>
						Simplify your task organization and prioritization, liberating your
						mind from clutter. Embrace efficiency today with seamless task
						management.
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
		</>
	);
}
