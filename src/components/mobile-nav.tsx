"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "~/util/cn";
import { buttonVariants } from "./ui/button";
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
					buttonVariants({ variant: "ghost" }),
					"px-2 py-1.5 md:hidden",
				)}
				onClick={toggleDropdown}
			>
				{interacted ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
			</div>
			{interacted && (
				<ul
					tabIndex={0}
					className="flex flex-col dropdown-content mt-3 z-[1] py-2 shadow border border-neutral-200 bg-white rounded-md w-52"
				>
					{docsConfig.navItems.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								className={cn(
									"inline-flex border border-transparent bg-transparent px-4 py-2 w-full items-center text-sm font-medium transition-colors hover:bg-neutral-200",
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
