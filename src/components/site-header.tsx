import * as React from "react";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { cn } from "~/util/cn";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
	return (
		<header className="navbar container sticky top-0 z-50 h-20 px-4 w-full bg-neutral-100/60 border-b border-neutral-300/40 backdrop-blur transition-shadow">
			<div className="navbar-start">
				<Link href="/" className="flex justify-center">
					<h1 className="text-2xl font-bold leading-none tracking-tighter">
						tasktrove
					</h1>
				</Link>
			</div>
			<MainNav />
			<div className="navbar-end">
				<div className="flex-none justify-center mr-2">
					<Link href="/sign-in" className={cn(buttonVariants())}>
						Sign In
					</Link>
				</div>
				<MobileNav />
			</div>
		</header>
	);
}
