"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { NavigationBarCenter } from "./navigation-bar";
import { docsConfig } from "~/config/docs";

export function MainNav() {
	const pathname = usePathname();

	return (
		<NavigationBarCenter className="hidden gap-4 items-center text-sm font-medium md:flex">
			{docsConfig.navItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"transition-colors text-neutral-700/60 hover:text-black",
						pathname === item.href ? "text-black" : "hover:text-neutral-700",
					)}
				>
					{item.label}
				</Link>
			))}
		</NavigationBarCenter>
	);
}
