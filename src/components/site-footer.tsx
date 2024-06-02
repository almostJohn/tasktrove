"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "~/config/site";

export function SiteFooter() {
	const pathname = usePathname();

	if (pathname === "/sign-in") {
		return null;
	}

	return (
		<footer className="mt-auto w-full bg-transparent border-t border-slate-300 pt-6 pb-12">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-12">
				<Link
					href="/"
					className="text-lg font-bold leading-none tracking-tighter md:text-2xl"
				>
					{siteConfig.name}
				</Link>
				<div className="text-slate-500 text-sm mt-4 md:mt-0">
					&copy; {new Date().getFullYear()} {siteConfig.name}. —{" "}
					<Link
						href="/terms"
						className="underline transition-colors hover:text-black"
					>
						Terms
					</Link>{" "}
					&amp;{" "}
					<Link
						href="/privacy"
						className="underline transition-colors hover:text-black"
					>
						Privacy
					</Link>
				</div>
			</div>
		</footer>
	);
}
