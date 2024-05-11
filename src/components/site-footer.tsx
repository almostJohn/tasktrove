import * as React from "react";
import Link from "next/link";

export function SiteFooter() {
	return (
		<footer className="footer footer-center p-10 bg-neutral-800 text-neutral-100 w-full">
			<nav className="grid grid-flow-col gap-4">
				<Link href="/faq" className="link link-hover">
					FAQ
				</Link>
				<Link href="/terms" className="link link-hover">
					Terms
				</Link>
				<Link href="/privacy" className="link link-hover">
					Privacy
				</Link>
			</nav>
			<aside>
				<p className="text-xs">
					&copy; {new Date().getFullYear()} tasktrove. All rights reserved.
				</p>
			</aside>
		</footer>
	);
}
