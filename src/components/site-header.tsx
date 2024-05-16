import * as React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { cn } from "~/util/cn";
import { siteConfig } from "~/config/site";
import { MainNav } from "./main-nav";
import { buttonVariants } from "./ui/button";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
	const { userId } = auth();

	return (
		<>
			{!userId && (
				<header
					className={cn(
						"navbar container sticky top-0 z-50 h-20 w-full px-5 bg-neutral-100/60 border-b border-neutral-300/40 backdrop-blur transition-shadow",
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
			)}

			{userId && (
				<header
					className={cn(
						"navbar container sticky top-0 z-50 h-20 w-full px-5 bg-neutral-100/60 border-b border-neutral-300/40 backdrop-blur transition-shadow",
					)}
				>
					<div className="navbar-start">
						<Link
							href="/dashboard"
							className="flex items-center text-lg font-bold leading-none tracking-tighter mr-2 md:text-2xl"
						>
							{siteConfig.name}
						</Link>
						<span className="text-5xl font-thin text-neutral-500">/</span>
						<div className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-lg border-transparent bg-neutral-200 text-center font-bold leading-none tracking-tighter">
							Free
						</div>
					</div>
					<div className="navbar-end">
						<UserButton afterSignOutUrl="/" />
					</div>
				</header>
			)}
		</>
	);
}
