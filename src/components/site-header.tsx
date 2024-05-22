"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "~/util/cn";
import { siteConfig } from "~/config/site";
import { MainNav } from "./main-nav";
import { buttonVariants } from "./ui/button";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
	const pathname = usePathname();

	if (pathname === "/sign-in") {
		return null;
	}

	return (
		<header
			className={cn(
				"navbar sticky top-0 z-50 h-20 w-full px-6 bg-neutral-100/60 border-b border-neutral-300/40 backdrop-blur transition-shadow",
			)}
		>
			<div className="navbar-start">
				<Link
					href="/"
					className="flex items-center text-lg font-bold leading-none tracking-tighter md:text-2xl"
				>
					{siteConfig.name}
				</Link>
			</div>
			<MainNav />
			<div className="navbar-end">
				<div className="flex-none items-center justify-center mr-2">
					<Link href="/sign-in" className={cn(buttonVariants())}>
						Sign In
					</Link>
				</div>
				<MobileNav />
			</div>
		</header>
	);
}
