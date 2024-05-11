import * as React from "react";
import Link from "next/link";
import { LayoutDashboard, ArrowRightIcon } from "lucide-react";

export function Announcement() {
	return (
		<Link
			href="/dashboard"
			className="inline-flex items-center rounded-lg bg-neutral-200 px-3 py-1 text-sm font-medium"
		>
			<LayoutDashboard className="h-4 w-4 mr-1" />{" "}
			<span>Check Out Dashboard</span>
			<ArrowRightIcon className="ml-1 h-4 w-4" />
		</Link>
	);
}
