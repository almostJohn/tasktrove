import * as React from "react";
import Link from "next/link";
import { cn } from "~/util/cn";
import { docsConfig } from "~/config/docs";
import { buttonVariants } from "./ui/button";

export function MainNav() {
	return (
		<div className="navbar-center hidden lg:flex">
			<div className="flex justify-center space-x-4 font-medium">
				{docsConfig.mainNav.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={cn(buttonVariants({ variant: "ghost" }))}
					>
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
}
