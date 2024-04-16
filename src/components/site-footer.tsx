import * as React from "react";
import Link from "next/link";
import { cn } from "~/util/cn";

export function SiteFooter() {
	return (
		<footer className="footer px-10 py-6 border-t border-neutral-200">
			<aside className="items-center grid-flow-col">
				<p className="text-lg leading-none font-bold text-nowrap">tasktrove.</p>
			</aside>
			<nav className="md:place-self-center md:justify-self-end">
				<p>
					&copy; {new Date().getFullYear()} tasktrove. —{" "}
					<Link
						href="/terms"
						className={cn(
							"link link-hover",
							"hover:underline underline-offset-4",
						)}
					>
						Terms
					</Link>{" "}
					&{" "}
					<Link
						href="/privacy"
						className={cn(
							"link link-hover",
							"hover:underline underline-offset-4",
						)}
					>
						Privacy
					</Link>
				</p>
			</nav>
		</footer>
	);
}
