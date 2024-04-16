import * as React from "react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { MainNav } from "./main-nav";

export function SiteHeader() {
	return (
		<header className="navbar sticky top-5 z-50 h-14 w-full bg-neutral-200 rounded">
			<div className="navbar-start">
				<Link href="/" className="flex items-center ml-4">
					<div className="flex flex-col space-y-1 text-sm leading-none text-nowrap">
						<span className="text-lg font-bold">tasktrove.</span>
					</div>
				</Link>
			</div>
			<div className="navbar-end">
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
}
