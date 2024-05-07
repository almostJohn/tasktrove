"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/util/cn";
import { docsConfig } from "~/config/docs";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="navbar-center hidden lg:flex">
			<div className="flex justify-center space-x-4">
				{docsConfig.mainNav.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							"inline-flex border-transparent bg-transparent px-4 py-2 items-center justify-center rounded-md font-bold text-sm text-center transition-colors hover:bg-teal/60 focus:outline-none focus:ring focus:ring-blue-400",
							pathname === item.href ? "bg-teal/80" : "hover:bg-teal/60",
						)}
					>
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
}
