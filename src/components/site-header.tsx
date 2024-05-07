import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
	return (
		<header className="navbar sticky top-0 z-50 h-20 px-4 w-full bg-slate-100/60 border-b border-slate-200/40 backdrop-blur transition-shadow">
			<div className="navbar-start">
				<Link href="/" className="flex flex-row items-baseline">
					<h1 className="relative flex flex-row items-baseline text-2xl font-bold">
						<span className="sr-only">{siteConfig.name}</span>
						<span className="tracking-tighter">{siteConfig.name}</span>
						<sup className="absolute left-[calc(100%+.1rem)] top-0 text-xs font-bold text-black">
							[BETA]
						</sup>
					</h1>
				</Link>
			</div>
			<MainNav />
			<MobileNav />
		</header>
	);
}
