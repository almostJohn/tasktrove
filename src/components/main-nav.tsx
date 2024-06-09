"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { docsConfig } from "~/config/docs";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden items-center space-x-4 md:flex">
			{docsConfig.navItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname === item.href
							? "text-foreground"
							: "hover:text-foreground/60",
					)}
				>
					{item.label}
				</Link>
			))}
		</div>
	);
}
