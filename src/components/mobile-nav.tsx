import * as React from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Icons } from "./icons";
import { docsConfig } from "~/config/docs";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function MobileNav() {
	return (
		<>
			<div className="flex items-center justify-center">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" className="h-9 md:hidden">
							<Icons.menu className="h-[1.2rem] w-[1.2rem]" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-52" align="end">
						{docsConfig.navItems.map((item) => (
							<DropdownMenuItem key={item.href}>
								<Link href={item.href}>{item.label}</Link>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</>
	);
}
