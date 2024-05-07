import * as React from "react";
import Link from "next/link";
import { cn } from "~/util/cn";
import { siteConfig } from "~/config/site";

export function SiteFooter() {
	return (
		<footer className="footer px-8 py-6 border-t border-slate-200">
			<aside className="items-center grid-flow-col">
				<p className="text-lg leading-none tracking-tighter font-bold text-nowrap">
					{siteConfig.name}
				</p>
			</aside>
			<nav className="md:place-self-center md:justify-self-end">
				<p className="text-neutral-500">
					&copy; {new Date().getFullYear()} {siteConfig.name} —{" "}
					<Link
						href="/terms"
						className={cn(
							"underline underline-offset-1 transition-colors",
							"hover:text-neutral-900",
						)}
					>
						Terms
					</Link>{" "}
					&{" "}
					<Link
						href="/privacy"
						className={cn(
							"underline underline-offset-1 transition-colors",
							"hover:text-neutral-900",
						)}
					>
						Privacy
					</Link>
				</p>
			</nav>
		</footer>
	);
}
