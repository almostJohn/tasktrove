import * as React from "react";
import Link from "next/link";
import { Announcement } from "./announcement";
import { cn } from "~/util/cn";

export function HeroSection() {
	return (
		<div className="flex items-center py-12 pl-2 pr-5 lg:py-24">
			<div className="flex flex-col items-start space-y-6">
				<Announcement />
				<h1 className="text-3xl font-bold tracking-tighter lg:text-6xl">
					Organize now, Delete later
				</h1>
				<p className="text-balance">
					tasktrove helps you effortlessly categorize and prioritize tasks,
					freeing your mind from clutter. Embrace efficiency today!
				</p>
				<div className="flex items-center space-x-4">
					<Link
						href="/dashboard"
						className={cn(
							"inline-flex items-center justify-center border-transparent bg-blurple px-6 py-2 rounded-lg text-center text-white text-sm font-medium transition-colors hover:bg-blurple/90",
						)}
					>
						Try Now — <span className="italic ml-1">it&apos;s free</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
