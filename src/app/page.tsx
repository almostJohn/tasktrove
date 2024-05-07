import Link from "next/link";
import * as React from "react";
import { Announcement } from "~/components/announcement";
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeading,
} from "~/components/page-header";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/util/cn";

export default function IndexPage() {
	return (
		<div className="mx-auto container px-8 py-2 lg:py-5">
			<PageHeader>
				<Announcement />
				<PageHeading>Uncover Your Productivity Potential</PageHeading>
				<PageHeaderDescription>
					tasktrove helps you effortlessly categorize and prioritize tasks,
					freeing your mind from clutter. Embrace efficiency today!
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
	);
}
