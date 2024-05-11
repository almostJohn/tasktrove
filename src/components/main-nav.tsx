"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "~/util/cn";
import { docsConfig } from "~/config/docs";

export function MainNav() {
	const pathname = usePathname();

	return (
		<nav className="navbar-center hidden items-center gap-4 text-sm font-medium leading-6 md:flex">
			{docsConfig.navItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"transition-colors text-neutral-900/60 hover:text-neutral-900/80",
						pathname === item.href
							? "text-neutral-900"
							: "hover:text-neutral-900/80",
					)}
				>
					{item.label}
				</Link>
			))}
		</nav>
	);
}
