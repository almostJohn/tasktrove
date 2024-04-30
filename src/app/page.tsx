import * as React from "react";
import Link from "next/link";
import { cn } from "~/util/cn";
import { buttonVariants } from "~/components/ui/button";
import { Announcement } from "~/components/announcement";

export default function IndexPage() {
	return (
		<div className="mx-auto max-w-6xl container flex flex-col justify-center pt-8 pb-24 px-6 lg:pt-16 lg:pb-40">
			<div className="flex flex-col lg:flex-row">
				<div>
					<div className="py-3">
						<Announcement />
					</div>
					<h1 className="text-3xl font-bold leading-none tracking-tighter lg:text-5xl">
						Organize now, Delete later
					</h1>
					<p className="text-xl font-light py-6 lg:text-2xl">
						tasktrove helps you effortlessly categorize and prioritize tasks,
						freeing your mind from clutter. Embrace efficiency today!
					</p>
					<Link href="/register" className={cn(buttonVariants())}>
						Try now <span className="ml-1 italic">— it&apos;s free</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
