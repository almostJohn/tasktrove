"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	NavigationBar,
	NavigationBarStart,
	NavigationBarEnd,
} from "./navigation-bar";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./ui/button";
import { siteConfig } from "~/config/site";

export function SiteHeader() {
	const pathname = usePathname();

	if (pathname === "/sign-in") {
		return null;
	}

	return (
		<NavigationBar className="sticky top-0 z-50 h-16 w-full px-6 border-b border-slate-100/40 bg-opacity-50 backdrop-blur transition-shadow md:h-20">
			<NavigationBarStart>
				<Link
					href="/"
					className="text-lg font-bold leading-none tracking-tighter md:text-2xl"
				>
					{siteConfig.name}
				</Link>
			</NavigationBarStart>
			<MainNav />
			<NavigationBarEnd>
				<div className="flex-none items-center justify-center mr-2">
					<Link href="/sign-in" className={cn(buttonVariants({ size: "sm" }))}>
						Sign In
					</Link>
				</div>
				<MobileNav />
			</NavigationBarEnd>
		</NavigationBar>
	);
}
