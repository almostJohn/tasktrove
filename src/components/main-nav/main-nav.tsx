import * as React from "react";
import { NavCenter } from "./nav-center";
import { cn } from "~/util/cn";
import { NavStart } from "./nav-start";
import { NavEnd } from "./nav-end";

export function MainNav() {
	return (
		<>
			<header
				className={cn(
					"hidden navbar sticky top-0 z-50 h-14 w-full bg-neutral-100/60 border-b border-neutral-200/40 backdrop-blur transition-shadow lg:flex",
				)}
			>
				<NavStart />
				<NavCenter />
				<NavEnd />
			</header>
		</>
	);
}
