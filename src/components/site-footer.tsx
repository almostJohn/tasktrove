import * as React from "react";
import Link from "next/link";
import { cn } from "~/util/cn";

export function SiteFooter() {
	return (
		<footer className="footer px-10 py-6 border-t border-neutral-200">
			<aside className="items-center grid-flow-col">
				<p className="text-lg leading-none tracking-tighter font-bold text-nowrap">
					tasktrove.
				</p>
			</aside>
			<nav className="md:place-self-center md:justify-self-end">
				<p className="text-neutral-500">
					&copy; {new Date().getFullYear()} tasktrove. —{" "}
					<Link
						href="/terms"
						className={cn(
							"underline underline-offset-2 transition-colors",
							"hover:text-neutral-900",
						)}
					>
						Terms
					</Link>{" "}
					&{" "}
					<Link
						href="/privacy"
						className={cn(
							"underline underline-offset-2 transition-colors",
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
