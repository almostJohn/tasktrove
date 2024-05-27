"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
	SiDiscord as Discord,
	SiX as X,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";

export function SiteFooter() {
	const pathname = usePathname();

	if (pathname === "/sign-in") {
		return null;
	}

	return (
		<footer className="footer footer-center bottom-0 p-11 bg-neutral-900 text-neutral-100 w-full">
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
			<nav>
				<div className="grid grid-flow-col gap-4">
					<Link
						href="https://discord.com/"
						className="transition-colors hover:text-neutral-400"
					>
						<Discord className="h-4 w-4" />
					</Link>
					<Link
						href="https://twitter.com/"
						className="transition-colors hover:text-neutral-400"
					>
						<X className="h-4 w-4" />
					</Link>
					<Link
						href="https://facebook.com/"
						className="transition-colors hover:text-neutral-400"
					>
						<Facebook className="h-4 w-4" />
					</Link>
				</div>
			</nav>
			<aside>
				<p className="text-xs">
					&copy; {new Date().getFullYear()} tasktrove. All Rights Reserved.
				</p>
			</aside>
		</footer>
	);
}
