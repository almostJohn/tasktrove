import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";

export function SiteFooter() {
	return (
		<footer className="mx-auto container w-full border-t border-border py-6 px-12">
			<div className="flex flex-col items-start justify-between md:flex-row md:items-center gap-4">
				<Link
					href="/"
					className="text-lg font-bold leading-none tracking-tighter md:text-2xl"
				>
					{siteConfig.name}
				</Link>
				<div className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} {siteConfig.name}. —{" "}
					<Link
						href="/terms"
						className="transition-colors underline underline-offset-1 hover:text-neutral-900"
					>
						Terms
					</Link>{" "}
					&amp;{" "}
					<Link
						href="/privacy"
						className="transition-colors underline underline-offset-1 hover:text-neutral-900"
					>
						Privacy
					</Link>
				</div>
			</div>
		</footer>
	);
}
