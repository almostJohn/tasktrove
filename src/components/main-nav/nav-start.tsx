import * as React from "react";
import Link from "next/link";

export function NavStart() {
	return (
		<div className="navbar-start">
			<Link href="/" className="ml-3 flex justify-center">
				<div className="flex flex-col space-y-1 text-sm leading-none tracking-tighter text-nowrap">
					<span className="text-xl font-bold">tasktrove.</span>
				</div>
			</Link>
		</div>
	);
}
