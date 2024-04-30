import * as React from "react";
import Link from "next/link";

export function NavStart() {
	return (
		<div className="flex-1">
			<Link href="/" className="flex justify-center">
				<div className="flex flex-col space-y-1 leading-none tracking-tighter text-nowrap">
					<span className="text-[16px] font-bold">tasktrove.</span>
				</div>
			</Link>
		</div>
	);
}
