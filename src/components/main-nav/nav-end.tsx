import * as React from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "~/util/cn";

export function NavEnd() {
	return (
		<div className="navbar-end">
			<div className="flex justify-center space-x-2">
				<Link
					href="/login"
					className={cn(buttonVariants({ variant: "ghost" }))}
				>
					Login
				</Link>
				<Link href="/register" className={cn(buttonVariants())}>
					Sign Up — <span className="ml-1 italic">it&apos;s free</span>
				</Link>
			</div>
		</div>
	);
}
