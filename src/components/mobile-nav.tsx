"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { docsConfig } from "~/config/docs";

export function MobileNav() {
	const [interacted, setInteracted] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
		setInteracted(!interacted);
	};

	const closeDropdown = () => {
		setInteracted(false);
	};

	React.useEffect(() => {
		const clickOutside = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				closeDropdown();
			}
		};

		document.addEventListener("mousedown", clickOutside);

		return () => {
			document.removeEventListener("mousedown", clickOutside);
		};
	}, []);

	return (
		<div className={cn("dropdown dropdown-end")} ref={dropdownRef}>
			<div
				tabIndex={0}
				role="button"
				className={cn(
					buttonVariants({ variant: "ghost", size: "icon" }),
					"h-9 w-9 md:hidden",
				)}
				onClick={toggleDropdown}
			>
				<Icons.menu />
			</div>
			{interacted && (
				<ul
					tabIndex={0}
					className="flex flex-col dropdown-content mt-2 z-[1] py-2 shadow border border-slate-200 bg-white rounded-md w-52"
				>
					{docsConfig.navItems.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								className={cn(
									"inline-flex border border-transparent bg-transparent h-8 px-3 py-2 w-full items-center text-sm font-medium transition-colors hover:bg-slate-200",
								)}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
