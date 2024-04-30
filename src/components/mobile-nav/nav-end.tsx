"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "~/util/cn";
import { docsConfig } from "~/config/docs";
import { buttonVariants } from "../ui/button";

export function NavEnd() {
	const [openMenu, setOpenMenu] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	const closeMenu = () => {
		setOpenMenu(false);
	};

	React.useEffect(() => {
		const clickOutside = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", clickOutside);

		return () => {
			document.removeEventListener("mousedown", clickOutside);
		};
	}, []);

	return (
		<>
			<div className="flex-none space-x-2">
				<div className="flex justify-center gap-2">
					<Link
						href="/login"
						className={cn(buttonVariants({ variant: "ghost" }), "px-2 py-1.5")}
					>
						Login
					</Link>
					<Link
						href="/register"
						className={cn(buttonVariants(), "px-2 py-1.5")}
					>
						Sign Up
					</Link>
				</div>
				<div className="dropdown dropdown-end" ref={dropdownRef}>
					<div
						tabIndex={0}
						role="button"
						className={cn(buttonVariants({ variant: "ghost" }), "px-2 py-1.5")}
						onClick={toggleMenu}
					>
						<Menu className="h-5 w-5" />
					</div>
					{openMenu && (
						<ul
							tabIndex={0}
							className="flex flex-col dropdown-content mt-3 py-2 z-[1] shadow border border-neutral-300 bg-neutral-100 rounded w-52"
						>
							{docsConfig.mobileNav.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className={cn(
											"inline-flex border-transparent bg-transparent px-4 py-2 w-full items-center text-sm font-medium transition-colors hover:bg-neutral-200/90",
										)}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
}
