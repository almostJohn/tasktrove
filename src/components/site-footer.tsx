import * as React from "react";
import Link from "next/link";

export function SiteFooter() {
	return (
		<footer className="footer mx-auto container items-center p-6 border-t border-neutral-300/40">
			<aside className="items-center grid-flow-col">
				<p>&copy; {new Date().getFullYear()} tasktrove. All rights reserved.</p>
			</aside>
			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<Link
					href="/terms"
					className="text-neutral-500 transition-all hover:text-neutral-900"
				>
					Terms
				</Link>
				<Link
					href="/privacy"
					className="text-neutral-500 transition-all hover:text-neutral-900"
				>
					Privacy
				</Link>
			</nav>
		</footer>
	);
}
