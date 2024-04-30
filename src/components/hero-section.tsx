import * as React from "react";
import Link from "next/link";
import { Announcement } from "./announcement";
import { buttonVariants } from "./ui/button";
import { cn } from "~/util/cn";

export function HeroSection() {
	return (
		<div className="flex flex-col lg:flex-row">
			<div>
				<div className="py-3">
					<Announcement />
				</div>
				<h1 className="text-3xl font-bold leading-none tracking-tighter lg:text-6xl">
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
	);
}
