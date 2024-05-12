import * as React from "react";
import Link from "next/link";
import {
	PageHeader,
	PageHeaderContent,
	PageHeaderBody,
	PageHeaderHeading,
	PageHeaderDescription,
	PageActions,
} from "~/components/page-header";
import { Announcement } from "~/components/announcement";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/util/cn";

export default function IndexPage() {
	return (
		<>
			<div className="mx-auto container">
				<PageHeader>
					<PageHeaderContent>
						<PageHeaderBody>
							<Announcement />
							<PageHeaderHeading>
								Streamlined Task Management for Busy Professionals
							</PageHeaderHeading>
							<PageHeaderDescription>
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
						</PageHeaderBody>
					</PageHeaderContent>
				</PageHeader>
			</div>
		</>
	);
}
