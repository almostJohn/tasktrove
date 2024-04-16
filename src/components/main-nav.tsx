"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "~/config/docs";
import { cn } from "~/util/cn";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden mr-1 items-stretch gap-2 lg:flex">
			{docsConfig.mainNav.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"inline-flex border-0 bg-transparent items-center justify-center rounded-lg px-6 py-2 text-center text-sm font-medium transition-colors hover:bg-lightBlurple hover:text-white",
						pathname === item.href
							? "inline-flex border-0 bg-blurple items-center justify-center rounded-lg px-6 py-2 text-center text-white text-sm font-medium"
							: "hover:bg-lightBlurple hover:text-white",
					)}
				>
					{item.title}
				</Link>
			))}
		</div>
	);
}
