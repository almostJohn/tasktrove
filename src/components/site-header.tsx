import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { MainNav } from "./main-nav";
import { buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 max-w-screen-2xl items-center justify-between">
				<Link
					href="/"
					className="text-lg font-bold leading-none tracking-tighter md:text-2xl"
				>
					{siteConfig.name}
				</Link>
				<div className="flex-shrink-0">
					<MainNav />
				</div>
				<div className="flex items-end space-x-3">
					<Link href="/sign-in" className={cn(buttonVariants(), "h-9")}>
						Sign In
					</Link>
					<MobileNav />
				</div>
			</div>
		</header>
	);
}
