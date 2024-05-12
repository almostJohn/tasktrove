import * as React from "react";
import Link from "next/link";
import { LayoutDashboard, ArrowRightIcon } from "lucide-react";

export function Announcement() {
	return (
		<Link
			href="/dashboard"
			className="inline-flex px-4 py-2 rounded-full bg-transparent border border-neutral-200 items-center text-center text-sm font-medium hover:border-neutral-300"
		>
			<LayoutDashboard className="mr-2 h-4 w-4" />{" "}
			<span>Check out Dashboard</span>
			<ArrowRightIcon className="ml-2 h-4 w-4" />
		</Link>
	);
}
