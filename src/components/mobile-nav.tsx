"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "~/util/cn";
import { docsConfig } from "~/config/docs";

export function MobileNav() {
	const pathname = usePathname();
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
		<div className="dropdown dropdown-end" ref={dropdownRef}>
			<div
				tabIndex={0}
				role="button"
				className={cn("btn btn-ghost lg:hidden", "hover:bg-transparent")}
				onClick={toggleMenu}
			>
				{openMenu ? <X /> : <Menu />}
			</div>
			{openMenu && (
				<ul
					tabIndex={0}
					className="flex flex-col dropdown-content mt-3 py-2 z-[1] shadow bg-neutral-200 rounded w-52"
				>
					{docsConfig.mobileNav.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								className={cn(
									"inline-flex w-full border-0 bg-transparent items-center px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-lightBlurple hover:text-white",
									pathname === item.href
										? "inline-flex w-full border-0 bg-blurple items-center px-4 py-2 text-left text-white text-sm font-medium"
										: "hover:bg-lightBlurple hover:text-white",
								)}
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
